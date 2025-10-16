// Import all React utilities (useState, useEffect, etc.)
import * as React from "react"

// Import toast types from your UI component library
import type {
  ToastActionElement, // Represents an optional action (e.g., a button inside the toast)
  ToastProps,          // Props used to define a toast
} from "@/components/ui/toast"

// ================================
// === CONSTANTS AND CONFIG =======
// ================================

// The maximum number of toasts that can appear on screen at once
const TOAST_LIMIT = 1

// Delay before removing a toast after it's dismissed (in milliseconds)
const TOAST_REMOVE_DELAY = 1000000 // 1,000,000ms = ~16.6 minutes

// ================================
// === TYPES AND INTERFACES =======
// ================================

// Extended toast type that includes a unique id and optional fields
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

// Enumerate all possible action types for toast management
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// ================================
// === UTILITY FUNCTIONS =========
// ================================

// Counter used to generate unique toast IDs
let count = 0

// Generates a unique toast ID string
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Define all possible action types used in the reducer
type ActionType = typeof actionTypes

// Union type for all supported toast actions
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// The global state shape for managing all active toasts
interface State {
  toasts: ToasterToast[]
}

// ================================
// === TOAST REMOVAL LOGIC =======
// ================================

// Map to keep track of timeouts for removing dismissed toasts
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Adds a toast to the removal queue after a delay
const addToRemoveQueue = (toastId: string) => {
  // Prevent scheduling duplicate removal timers
  if (toastTimeouts.has(toastId)) return

  // Schedule toast removal after TOAST_REMOVE_DELAY
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  // Save the timeout reference
  toastTimeouts.set(toastId, timeout)
}

// ================================
// === REDUCER FUNCTION ==========
// ================================

// Reducer handles all toast-related state updates
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Add a new toast to the beginning of the array
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    // Update an existing toast’s properties (e.g., title or status)
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    // Dismiss one or all toasts (set open = false)
    case "DISMISS_TOAST": {
      const { toastId } = action

      // Trigger removal after delay (side effect)
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => addToRemoveQueue(toast.id))
      }

      // Mark toast(s) as closed but don’t remove immediately
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      }
    }

    // Immediately remove one or all toasts from state
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return { ...state, toasts: [] }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// ================================
// === STATE MANAGEMENT =========
// ================================

// List of listeners (React state setters) that react to toast state changes
const listeners: Array<(state: State) => void> = []

// In-memory store for the current toast state (not React state)
let memoryState: State = { toasts: [] }

// Dispatch function to update memory state and notify all listeners
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

// ================================
// === PUBLIC TOAST FUNCTION =====
// ================================

// The `toast()` function allows components to trigger new toasts
type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId() // Generate unique toast ID

  // Function to update an existing toast
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })

  // Function to dismiss (close) a toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Dispatch an action to add the toast to the UI
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true, // Toast starts as visible
      onOpenChange: (open) => {
        if (!open) dismiss() // Auto-dismiss when closed manually
      },
    },
  })

  // Return control functions for the created toast
  return { id, dismiss, update }
}

// ================================
// === REACT HOOK: useToast ======
// ================================

// Hook to subscribe React components to the toast system
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  // Register this component as a listener when mounted
  React.useEffect(() => {
    listeners.push(setState)

    // Cleanup: remove listener when unmounted
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [state])

  // Expose toast state, creation, and dismiss functions
  return {
    ...state, // includes all active toasts
    toast,    // function to create a toast
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

// Export both the hook (for components) and the toast() function (for anywhere)
export { useToast, toast }
