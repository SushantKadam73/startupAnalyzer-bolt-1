import React from 'react';
import { Play, Download } from 'lucide-react';
import { useStore } from '../store/useStore';

interface ModuleContent {
  title: string;
  description: string;
  tools: string[];
  steps: string[];
}

const moduleContents: Record<string, ModuleContent> = {
  'idea-generation': {
    title: 'Idea Generation',
    description: 'Generate and validate innovative business ideas',
    tools: ['Market Research Tools', 'Trend Analysis', 'Validation Framework'],
    steps: [
      'Idea generation',
      'Idea validation',
      'Defining demographics and market'
    ]
  },
  'market-analysis': {
    title: 'Market Analysis',
    description: 'Analyze market trends and opportunities',
    tools: ['Market Intelligence Platform', 'Data Analytics', 'Trend Visualization'],
    steps: [
      'Real-time market trend analysis',
      'Competition mapping',
      'Opportunity identification',
      'Data-driven differentiation strategies'
    ]
  },
  'customer-discovery': {
    title: 'Customer Discovery',
    description: 'Understand and validate customer needs',
    tools: ['Customer Profiling', 'Journey Mapping', 'Validation Tools'],
    steps: [
      'ICP generation and refinement',
      'Need-mapping algorithms',
      'Validation process automation',
      'Customer journey simulation'
    ]
  },
  'competitive-analysis': {
    title: 'Competitive Intelligence',
    description: 'Analyze competitors and market positioning',
    tools: ['Competitor Analysis', 'Market Positioning', 'Gap Analysis'],
    steps: [
      'Competitor offering analysis',
      'Market gap identification',
      'Product positioning optimization',
      'Strategic advantage mapping'
    ]
  },
  'how-to-mvp': {
    title: 'How to MVP',
    description: 'Plan and build your minimum viable product',
    tools: ['MVP Planning', 'Feature Prioritization', 'Launch Strategy'],
    steps: [
      'Define features',
      'Plan',
      'Build',
      'Launch',
      'Post Launch (feedback, pivot…)'
    ]
  },
  'product-evolution': {
    title: 'Product Evolution',
    description: 'Evolve your product based on market feedback',
    tools: ['Feedback Analysis', 'Feature Planning', 'Market Adaptation'],
    steps: [
      'Automated feedback collection',
      'Feature prioritization',
      'Market-specific adaptation recommendations',
      'Iteration tracking and analysis'
    ]
  },
  'international-market': {
    title: 'International Market Analysis',
    description: 'Analyze and plan international market entry',
    tools: ['Global Market Analysis', 'Cultural Assessment', 'Regulatory Compliance'],
    steps: [
      'International market analysis',
      'Cultural compatibility assessment',
      'Regulatory compliance guidance',
      'Localized growth strategy generation'
    ]
  },
  'research-report': {
    title: 'Research Report',
    description: 'Comprehensive research analysis and insights',
    tools: ['Research Analysis', 'Report Generation', 'Q&A System'],
    steps: [
      'Summarize the research',
      'Ask questions about the research report'
    ]
  }
};

interface ModuleCanvasProps {
  moduleName: string;
}

function ModuleCanvas({ moduleName }: ModuleCanvasProps) {
  const currentProject = useStore((state) => state.currentProject);
  const normalizedModuleName = moduleName.toLowerCase().replace(/\s+/g, '-');
  const moduleContent = moduleContents[normalizedModuleName];

  if (!moduleContent) {
    return (
      <div className="p-6">
        <p>Module not found</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-2xl mx-auto">
        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => console.log('Starting analysis...')}
            className="flex-1 px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90 flex items-center justify-center space-x-2"
          >
            <Play size={20} />
            <span>Start Analysis</span>
          </button>
          
          <button
            onClick={() => console.log('Downloading analysis...')}
            className="flex-1 px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-white rounded-lg hover:opacity-90 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
            <span>Download Analysis</span>
          </button>
        </div>

        {/* Project Context */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
            Current Project
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {currentProject?.name || 'No project selected'}
          </p>
        </div>

        {/* Analysis Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
            Tools We'll Use
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {moduleContent.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>

        {/* Analysis Steps */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
            Analysis Steps
          </h2>
          <ul className="space-y-2">
            {moduleContent.steps.map((step, index) => (
              <li
                key={index}
                className="flex items-center text-gray-600 dark:text-gray-400"
              >
                <span className="w-6 h-6 rounded-full bg-light-primary/10 text-light-primary flex items-center justify-center mr-3 text-sm">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModuleCanvas;
