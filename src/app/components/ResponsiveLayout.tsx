const ResponsiveLayout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Div */}
        <div className="bg-blue-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-2">First Section</h2>
          <p>
            This is the first section of the layout. On medium devices, this
            section will stretch to take the full width of the row.
          </p>
        </div>

        {/* Second Row for Medium */}
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-2">Second Section</h2>
          <p>
            This section appears on the second row for medium devices, taking up
            half the screen width.
          </p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-2">Third Section</h2>
          <p>
            This is the third section. On medium devices, it aligns next to the
            second section, each occupying 50% of the row.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;
