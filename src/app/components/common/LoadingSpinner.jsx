// src/app/components/common/LoadingSpinner.jsx
export default function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }