import type { ProjectEntry } from '@/types/project.types';

/**
 * Portfolio project data.
 *
 * Add entries here — the Projects scene renders this array.
 * Display priority follows `category`: professional → personal → educational.
 *
 * To attach a full case study, create a Markdown file at
 * src/assets/markdown/projects/<filename>.md and set `markdownFile`
 * relative to src/assets/markdown/ (e.g. 'projects/zbox.md').
 *
 * Example entry:
 * {
 *   id:           'project-echoes',
 *   title:        'Echoes of the Hollow',
 *   category:     'personal',
 *   keyFeatures:  ['Procedural exploration', 'Dynamic narrative'],
 *   markdownFile: 'projects/project-echoes.md',
 *   featured:     true,
 * },
 */
export const projects: ProjectEntry[] = [
  // ── Professional ─────────────────────────────────────────────────────────
  {
    id:           'zbox',
    title:        'ZBox',
    category:     'professional',
    keyFeatures:  [
      'Realistic real time 3D Avatar.',
      'Multi-layer AI Fallback System.',
      'Mobile - Desktop - Pixel Streaming.',
      'Efficient Metahuman Implementation.',
      'Smart animation behaviors.',
    ],
    markdownFile: 'projects/zbox.md',
  },
  {
    id:           'vgames',
    title:        'VGames',
    category:     'professional',
    keyFeatures:  [
      'Collection of reusable modular mini-games',
      'Compatible with any Unreal Engine project',
      'Dynamic Game Difficulty Balancing',
    ],
    markdownFile: 'projects/vgames.md',
  },
  {
    id:           'meeting-assistant',
    title:        'Meeting Assistant',
    category:     'professional',
    keyFeatures:  [
      'Realistic AI Meeting Assistant (Powered By ZBOX)',
      'Meeting Note-Taking',
      'Summarization',
      'Minutes Generation',
      'Email Service (Uses N8N)',
    ],
    markdownFile: 'projects/meeting-assistant.md',
  },
  {
    id:           'varabank',
    title:        'VaraBank',
    category:     'professional',
    keyFeatures:  [
      'VR Banking',
      'Account Management',
      'Banking Transactions',
      'Live Video Bank Support',
      'AI Agents integration',
    ],
    markdownFile: 'projects/varabank.md',
  },
  {
    id:           'govzistboom',
    title:        'GovZistboom',
    category:     'professional',
    keyFeatures:  [
      'Step-by-Step Process Guidance',
      'Interactive Government Workflow Simulation',
      'Mixed Reality Hand-Tracking Interaction',
    ],
    markdownFile: 'projects/govzistboom.md',
  },

  // ── Personal ─────────────────────────────────────────────────────────────
  {
    id:           'aysooda',
    title:        'Aysooda',
    category:     'personal',
    keyFeatures:  [
      'Highly Dynamic and Flexible Task Management Application',
      'Personal Planning & Productivity System',
      'Developed Using WinUI 3 & C#',
      'Customizable User Workflow and Management System',
    ],
    markdownFile: 'projects/aysooda.md',
  },
  {
    id:           'neural-networks-in-ue',
    title:        'Neural Networks in UE',
    category:     'personal',
    keyFeatures:  [
      'Import custom ONNX networks using NNE',
      'Integration with any tensor shapes',
      'Using different type of runtimes',
    ],
    markdownFile: 'projects/neural-networks-in-ue.md',
  },
  {
    id:           'island-nowhere',
    title:        'Island Nowhere',
    category:     'personal',
    keyFeatures:  [
      'Phaser 3 Isometric Client & Mini-Game Architecture',
      'Banking API Integration & SSO Authentication Pipeline',
      'Seasonal Map State Management & Reward Conversion System',
      'Editor Tool to easily make new seasonal map and deploy',
    ],
    markdownFile: 'projects/island-nowhere.md',
    links:        [
      { label: 'Document', url: 'https://drive.google.com/file/d/15e1lHPNnmC56vHeynK9o2MOi3ebG8vBc/view?usp=drive_link' },
      { label: 'Demo',     url: 'https://mt-pixel-game.mhka.cloud/' },
      { label: 'Editor',   url: 'https://mt-pixel-game.mhka.cloud/editor.html' },
    ],
  },

  // ── Educational ──────────────────────────────────────────────────────────
  {
    id:           'cybertank-2077',
    title:        'CyberTank 2077',
    category:     'educational',
    keyFeatures:  [
      'Engine-Less Game Architecture',
      'Game Loop',
      'Level & Loading Systems',
      'I/O Management',
      'Object-Oriented Design',
      'JavaFX 3D Rendering',
    ],
    markdownFile: 'projects/cybertank-2077.md',
    links:        [
      { label: 'Demo', url: 'https://drive.google.com/file/d/1k882IGtzAkO6ZSqfkKVw221slod445pG/view' },
    ],
  },
  {
    id:           'painting-style-recognition',
    title:        'PaintingStyleRecognition',
    category:     'educational',
    keyFeatures:  [
      'Deep Learning Painting Style Classification System',
      'CNN & EfficientNet-B3 Transfer Learning',
      'Data Augmentation',
      'Model Optimization & Grad-CAM Explainable AI',
      'Docker Multi-Container Microservice Deployment',
      'Modular AI Backend & Frontend Architecture',
    ],
    markdownFile: 'projects/painting-style-recognition.md',
    links:        [
      { label: 'Document',   url: 'https://drive.google.com/file/d/1ST6bM_c-skxW-pP2ZWSimvPl1Aaw-POn/view?usp=drive_link' },
      { label: 'Source Code', url: 'https://github.com/Moien34DevMode/PaintingStyleRecognition' },
    ],
  },
  {
    id:           'advanced-snake-and-ladder',
    title:        'Advanced Snake & Ladder',
    category:     'educational',
    keyFeatures:  [
      'Dynamic Board Generation',
      'Fair Randomization System',
      'Board Matrix Collision Resolution',
      'Error Handling',
    ],
    markdownFile: 'projects/advanced-snake-and-ladder.md',
  },
  {
    id:           'gamestore-backend',
    title:        'GameStore Back-End',
    category:     'educational',
    keyFeatures:  [
      'Friend System',
      'Trading System',
      'Data Management',
      'Data Encryption',
      'Role-Based Access Control',
      'Messaging System',
      'Donation System',
    ],
    markdownFile: 'projects/gamestore-backend.md',
  },
  {
    id:           'hospital-booking-system',
    title:        'Hospital Booking System',
    category:     'educational',
    keyFeatures:  [
      'Enterprise-Level Hospital Appointment System',
      'Software Engineering Design Practices',
      'Role-Based Access Control',
      'Appointment Scheduling',
      'Scalable Architecture',
    ],
    markdownFile: 'projects/hospital-booking-system.md',
  },
  {
    id:           'code-obfuscator-and-deobfuscator',
    title:        'Code Obfuscator & Deobfuscator',
    category:     'educational',
    keyFeatures:  [
      'Code Obfuscation & Deobfuscation Tool',
      'Reverse Engineering Protection',
      'Code Optimization',
      'Lexical & Semantic Analysis',
      'Compiler Design & Automata Theory',
    ],
    markdownFile: 'projects/code-obfuscator-and-deobfuscator.md',
  },
  {
    id:           'cisco-network-simulation',
    title:        'Cisco Network Simulation',
    category:     'educational',
    keyFeatures:  [
      'VLAN & Subnetting Configuration',
      'DHCP & Inter-VLAN Routing',
      'Network Security Configuration',
      'Router & Server Configuration',
    ],
    markdownFile: 'projects/cisco-network-simulation.md',
  },
  {
    id:           'assembly-text-editor',
    title:        'Assembly Text Editor',
    category:     'educational',
    keyFeatures:  [
      'File Loading, Editing & Saving',
      'Keyboard Shortcuts',
      'Minimal Developer-Oriented Interface in Terminal',
      'Written Entirely in Assembly',
    ],
    markdownFile: 'projects/assembly-text-editor.md',
  },
  {
    id:           'optimized-2-4-2-1-counter',
    title:        'Optimized 2-4-2-1 Counter',
    category:     'educational',
    keyFeatures:  [
      'Optimized Counter Using 2-4-2-1 BCD Code',
      'Digital Logic Circuit Design',
      'Logic IC Implementation',
    ],
    markdownFile: 'projects/optimized-2-4-2-1-counter.md',
  },
  {
    id:           'messaging-app-database',
    title:        'Messaging App Database',
    category:     'educational',
    keyFeatures:  [
      'Telegram-Inspired Full-Scale Messaging Database',
      'Comprehensive User, Chat & Message Data Modeling',
      'Full Types & Media',
      'Channels, Groups, Bots & APIs',
      'Premium, Business & Gift Systems',
    ],
    markdownFile: 'projects/messaging-app-database.md',
  },
  {
    id:           'my-windows-task-manager',
    title:        'My WindowsTaskManager',
    category:     'educational',
    keyFeatures:  [
      'DFS & BFS Tree Traversal',
      'Persistent Tree Storage',
      'Prioritized Tasks with Custom Parameters',
      'Hierarchical Tasks & Subtasks',
    ],
    markdownFile: 'projects/my-windows-task-manager.md',
  },
  {
    id:           'engineering-mathematics-projects',
    title:        'Engineering Mathematics Projects',
    category:     'educational',
    keyFeatures:  [
      'Audio Signal Analysis & Quality Enhancement',
      '2D Fourier Transform Image Compression & Frequency Analysis',
      'Biological Tissue Heat Transfer Simulation',
      'Analytical & Numerical PDE Solution with Error Analysis',
    ],
    markdownFile: 'projects/engineering-mathematics-projects.md',
  },
  {
    id:           'hardware-software-co-design',
    title:        'Hardware/Software Co-Design',
    category:     'educational',
    keyFeatures:  [
      'SFLA Optimization Algorithm',
      'Parallel Hardware Acceleration',
      'SystemC-Based Hardware Simulation',
      'Software–Hardware Communication & Integration',
      'Knapsack Optimization Benchmark',
    ],
    markdownFile: 'projects/hardware-software-co-design.md',
  },
  {
    id:           'digital-lock-system',
    title:        'Digital Lock System',
    category:     'educational',
    keyFeatures:  [
      'ATmega64 Microcontroller System Architecture',
      'AVR Assembly Implementation & Stack Management',
      'EEPROM Multi-User Authentication & Storage',
      'Interrupt-Driven Hardware Control & Reset Mechanisms',
      'Proteus Circuit Simulation & Timing Optimization',
    ],
    markdownFile: 'projects/digital-lock-system.md',
  },
  {
    id:           'numerical-computing-projects',
    title:        'Numerical Computing Projects',
    category:     'educational',
    keyFeatures:  [
      "Simpson's Rule Numerical Integration",
      'Fixed-Point Iteration Method (ISM)',
      'Lagrange Interpolation Algorithm',
      'LU Decomposition-Based Linear System Solver & Matrix Inversion',
      'Inverse Lagrange Interpolation & Newton-Raphson Hybrid Solver',
    ],
    markdownFile: 'projects/numerical-computing-projects.md',
  },
  {
    id:           'multi-threaded-message-queue-system',
    title:        'Multi-Threaded Message Queue System',
    category:     'educational',
    keyFeatures:  [
      'Thread-Safe Centralized MessageBroker Architecture',
      'Lock & Condition Variable Concurrency Control',
      'TTL-Based Automatic Message Expiration & Garbage Collection',
      'Asynchronous Multi-Threaded Consumer Engine',
      'Interactive Desktop Dashboard & Real-Time Log Interface',
    ],
    markdownFile: 'projects/multi-threaded-message-queue-system.md',
  },
  {
    id:           'unreal-engine-interactive-presentation',
    title:        'Unreal Engine Interactive Presentation & Game Theory Showcase',
    category:     'educational',
    keyFeatures:  [
      'Real-Time Facial Motion Capture via MetaHuman Live Link',
      'Modular 3D Slide Engine & Component Architecture',
      'Dynamic Typography & Spatial Grid Snapping System',
      'Interactive 3D Spatial Interaction System',
    ],
    markdownFile: 'projects/unreal-engine-interactive-presentation.md',
  },
  {
    id:           'signals-and-systems-audio-processing',
    title:        'Signals & Systems Audio Processing Project',
    category:     'educational',
    keyFeatures:  [
      'Sinusoidal Synthesis & Fourier Series Analysis',
      'Audio Sampling & Nyquist-Shannon Theorem Verification',
      'Narrowband Noise Injection & Notch Filtering',
      'STFT Spectrogram Time-Frequency Analysis',
      'Sawtooth Harmonic Spectrum & Timbre Synthesis',
      'Two-Way Audio Crossover Filter System',
      'Convolution Theorem Numerical Verification (Time vs FFT)',
    ],
    markdownFile: 'projects/signals-and-systems-audio-processing.md',
  },
];
