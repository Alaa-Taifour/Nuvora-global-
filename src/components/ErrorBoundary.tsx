import React from 'react';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    (this as any).state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    const state = (this as any).state;
    const props = (this as any).props;
    if (state.hasError) {
      let errorMessage = 'An unexpected error occurred.';
      const error = state.error;
      
      try {
        if (error?.message) {
          const parsed = JSON.parse(error.message);
          if (parsed.error && parsed.operationType) {
            errorMessage = `Firestore ${parsed.operationType} error: ${parsed.error}`;
          } else {
            errorMessage = error.message;
          }
        }
      } catch {
        errorMessage = error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen bg-navy-950 flex items-center justify-center p-6 text-center">
          <div className="glass-dark p-12 rounded-[40px] border-white/10 max-w-lg apple-shadow">
            <div className="w-20 h-20 bg-red-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">⚠️</span>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">System Error</h1>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">
              {errorMessage}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-tighter hover:bg-cyan-accent hover:text-white transition-all apple-shadow"
            >
              Refresh Application
            </button>
          </div>
        </div>
      );
    }

    return props.children;
  }
}
