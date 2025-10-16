// Default landing page component (acts as the home or fallback page)
const Index = () => {
  return (
    // Main container that fills the entire screen height
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* 
        - min-h-screen → sets the minimum height to fill the viewport 
        - flex → enables Flexbox layout
        - items-center → vertically centers content
        - justify-center → horizontally centers content
        - bg-background → uses your Tailwind background color (usually theme-based)
      */}

      {/* Inner content wrapper */}
      <div className="text-center">
        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Blank App
        </h1>
        {/*
          - text-4xl → large text size
          - font-bold → bold font weight
          - mb-4 → adds margin below the heading
        */}

        {/* Subtitle text */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
        {/*
          - text-xl → slightly larger text for readability
          - text-muted-foreground → softer color (from your Tailwind theme)
        */}
      </div>
    </div>
  )
}

// Export the component as the default export so it can be used as the main route
export default Index
