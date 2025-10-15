// Define the main Index component (homepage / fallback page)
const Index = () => {
  return (
    // Outer container: full-screen height, flex-centered content, background color from Tailwind variable
    <div className="min-h-screen flex items-center justify-center bg-background">
      
      {/* Inner container: centers text and constrains content */}
      <div className="text-center">
        {/* Main headline — large, bold, and spaced below */}
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Blank App
        </h1>

        {/* Subtext with muted color for contrast */}
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
      </div>
    </div>
  );
};

// Export the Index component so it can be used as the root route ("/")
export default Index;
