import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { OverviewView } from './components/OverviewView';
import { FinancialsView } from './components/FinancialsView';
import { StrategyView } from './components/StrategyView';
import { MarketingView } from './components/MarketingView';
import { VisionView } from './components/VisionView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.OVERVIEW);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.OVERVIEW:
        return <OverviewView />;
      case ViewState.FINANCIALS:
        return <FinancialsView />;
      case ViewState.STRATEGY:
        return <StrategyView />;
      case ViewState.MARKETING:
        return <MarketingView />; 
      case ViewState.VISION:
        return <VisionView />;
      default:
        return <OverviewView />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="ml-64 flex-1 p-8 overflow-y-auto h-screen">
        <header className="mb-8 flex justify-between items-end border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">{currentView}</h2>
            <p className="text-slate-500 mt-1">Interactive Dashboard Presentation</p>
          </div>
          <div className="text-right">
             <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-bold rounded-full uppercase tracking-wider">
                Founder Ready
             </span>
          </div>
        </header>
        
        <div className="animate-fade-in">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;