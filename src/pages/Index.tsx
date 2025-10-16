// Import React to define and render the component
import React from "react";

// --- MAIN INDEX COMPONENT ---
// This serves as a fallback or default landing page for your app.
const Index = () => {
  return (
    // Full-screen container with flexbox centering
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Centered content block */}
      <div className="text-center">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Blank App
        </h1>

        {/* Subtitle text */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
      </div>
    </div>
  );
};

// Export the component as the default export
export default Index;
