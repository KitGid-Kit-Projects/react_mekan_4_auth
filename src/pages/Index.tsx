// Default page component (acts as your home or fallback route)
const Index = () => {
  return (
    // Full-page container with background and centered content
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/*
        min-h-screen → Makes the container fill the entire viewport height
        flex → Enables Flexbox layout
        items-center → Vertically centers content
        justify-center → Horizontally centers content
        bg-background → Uses the background color defined in your Tailwind theme
      */}

      {/* Centered content area */}
      <div className="text-center">
        {/* Main headline */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Blank App
        </h1>
        {/*
          text-4xl → Large font size for the heading
          font-bold → Makes the text bold
          mb-4 → Adds margin below the heading
        */}

        {/* Subtitle paragraph */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
        {/*
          text-xl → Slightly larger font for readability
          text-muted-foreground → Uses a lighter text color (from your theme)
        */}
      </div>
    </div>
  )
}

// Export the component for use as a route or page
export default Index
