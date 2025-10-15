// Import React for hooks and component logic
import * as React from "react"

// Import types for toast elements and props from your UI component library
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

// --- Configuration constants ---
const TOAST_LIMIT = 1 // Maximum number of toasts displayed at once
const TOAST_REMOVE_DELAY = 1000000 // Delay (in ms) before removing dismissed toast (currently long)

// --- Type definitions ---

// Extend ToastProps with additional custom fields
type ToasterToast = ToastProps & {
  id: string // Unique toast ID
  title?: React.ReactNode // Optional title (can be string or React element)
  description?: React.ReactNode // Optional description
  action?: ToastActionElement // Optional action button (e.g., “Undo”)
}

// Define available action types for reducer
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// Simple ID generator for unique toast identifiers
let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// --- Reducer action types ---
type ActionType = typeof actionTypes

// Define all possible actions that can be dispatched to reducer
type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: ToasterToast["id"] }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: ToasterToast["id"] }

// --- Global toast state ---
interface State {
  toasts: ToasterToast[] // Array of current toast notifications
}

// Store active timeouts for scheduled removal
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Adds a toast to the removal queue (after TOAST_REMOVE_DELAY)
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return // Avoid duplicate timers

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ type: "REMOVE_TOAST", toastId }) // Actually remove toast
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

// --- Reducer function ---
// Manages how toast state updates based on actions
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        // Add new toast to the beginning of list (limit count)
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        // Update existing toast by ID
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Schedule toast(s) for removal
      if (toastId) addToRemoveQueue(toastId)
      else state.toasts.forEach((toast) => addToRemoveQueue(toast.id))

      // Mark toast(s) as closed visually (open = false)
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      }
    }

    case "REMOVE_TOAST":
      // Remove all toasts if ID not provided
      if (action.toastId === undefined)
        return { ...state, toasts: [] }

      // Otherwise, remove only specific toast
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// --- Listener management (simple store-like pattern) ---
const listeners: Array<(state: State) => void> = [] // Subscribers to toast state
let memoryState: State = { toasts: [] } // Persistent toast memory state

// Dispatch function that runs reducer and notifies all listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

// --- Toast creator function ---
// Allows programmatic creation and control of toasts
type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId() // Generate unique toast ID

  // Function to update existing toast’s properties
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })

  // Function to dismiss (close) a toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Add the new toast to global state
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true, // Mark toast as visible
      onOpenChange: (open) => {
        if (!open) dismiss() // Auto-dismiss when toast closes
      },
    },
  })

  // Return references for external control
  return { id, dismiss, update }
}

// --- Hook: useToast ---
// Subscribes a component to toast state updates
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    // Register listener
    listeners.push(setState)

    // Cleanup listener on unmount
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [state])

  return {
    ...state, // Current list of toasts
    toast, // Function to create new toast
    dismiss: (toastId?: string) =>
      dispatch({ type: "DISMISS_TOAST", toastId }), // Manually dismiss toasts
  }
}

// Export the hook and toast utility function
export { useToast, toast }
