export function Preview() {
    return (
      <div className="space-y-3 mx-4 flex-1">
        <h3 className="font-medium text-lg">Preview</h3>
        <p className="text-gray-600">This is how your portal will look like.</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <div className="space-y-4">
            <div className="h-8 bg-gray-100 rounded w-full" />
            <div className=" bg-teal-50 rounded w-full p-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
              <div className="flex gap-4 mt-8 mb=8 justify-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-sm bg-white text-center">•</div>
                ))}
              </div>
            </div>
            <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-medium">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    )
  }