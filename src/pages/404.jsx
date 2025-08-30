import React from 'react'

const NotFound = () => {
      return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-4 flex items-center justify-center">
            <div className="max-w-3xl mx-auto py-8 text-center">
                <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg">
                <h1 className="text-6xl font-bold text-red-500 mb-4">
                    404
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Page Not Found
                </h2>
                <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
                    The page you are looking for does not exist.
                </p>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                    It might have been moved or deleted. Please check the URL or return to the home page.
                </p>
                <a
                    href="/"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                    Go to Home Page
                </a>
                </article>
            </div>
        </div>
  );
}

export default NotFound
