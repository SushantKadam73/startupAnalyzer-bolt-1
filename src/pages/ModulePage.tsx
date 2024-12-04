import React from 'react';
import { useParams } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import ModuleCanvas from '../components/ModuleCanvas';

const moduleInfo: Record<string, { title: string; description: string }> = {
  'idea-generation': {
    title: 'Idea Generation',
    description: 'Generate and validate innovative business ideas'
  },
  'market-analysis': {
    title: 'Market Analysis',
    description: 'Analyze market trends and opportunities'
  },
  'customer-discovery': {
    title: 'Customer Discovery',
    description: 'Understand and validate customer needs'
  },
  'competitive-analysis': {
    title: 'Competitive Intelligence',
    description: 'Analyze competitors and market positioning'
  },
  'how-to-mvp': {
    title: 'How to MVP',
    description: 'Plan and build your minimum viable product'
  },
  'product-evolution': {
    title: 'Product Evolution',
    description: 'Evolve your product based on market feedback'
  },
  'international-market': {
    title: 'International Market Analysis',
    description: 'Analyze and plan international market entry'
  },
  'research-report': {
    title: 'Research Report',
    description: 'Comprehensive research analysis and insights'
  }
};

function ModulePage() {
  const { moduleName } = useParams();
  const moduleData = moduleName ? moduleInfo[moduleName] : null;

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <div className="flex h-full">
      {/* Chat Interface - Left Half */}
      <div className="w-1/2 border-r border-gray-200 dark:border-gray-800">
        <ChatInterface 
          moduleTitle={moduleData.title}
          moduleDescription={moduleData.description}
        />
      </div>

      {/* Module Canvas - Right Half */}
      <div className="w-1/2">
        <ModuleCanvas moduleName={moduleName} />
      </div>
    </div>
  );
}

export default ModulePage;
