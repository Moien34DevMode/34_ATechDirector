import type { SkillNode } from '@/types/skillTree.types';

// ─────────────────────────────────────────────────────────────────────────────
// Skill tree data.
//
// Structure mirrors the outline provided for the portfolio: four top-level
// domains under a single "Skills" root. Every node's `description` is left
// empty on purpose — fill these in later, they show up on hover.
//
// `id` values are stable dot-paths so they can safely be used as
// framer-motion layoutIds (shared across the "tile" and "zoomed container"
// states of the same node).
// ─────────────────────────────────────────────────────────────────────────────

function leaf(id: string, name: string): SkillNode {
  return { id, name, description: '' };
}

function node(id: string, name: string, children: SkillNode[]): SkillNode {
  return { id, name, description: '', children };
}

export const skillTree: SkillNode = node('skills', 'Skills', [
  // ── Game ──────────────────────────────────────────────────────────────
  node('skills.game', 'Game Development', [
    node('skills.game.unreal-engine', 'Unreal Engine', [
      node('skills.game.unreal-engine.engine-architecture', 'Engine Architecture', [
        leaf('skills.game.unreal-engine.engine-architecture.framework-layers', 'Framework Layers'),
        leaf('skills.game.unreal-engine.engine-architecture.object-model-hierarchy', 'Object Model Hierarchy'),
        leaf('skills.game.unreal-engine.engine-architecture.engine-lifecycle', 'Engine Lifecycle'),
        leaf('skills.game.unreal-engine.engine-architecture.delegates-event-system', 'Delegates & Event System'),
        leaf('skills.game.unreal-engine.engine-architecture.asset-management', 'Asset Management'),
        leaf('skills.game.unreal-engine.engine-architecture.world-partition-level-streaming', 'World Partition & Level Streaming'),
        leaf('skills.game.unreal-engine.engine-architecture.tick-system', 'Tick System'),
      ]),
      node('skills.game.unreal-engine.profiling-optimization', 'Low Level Profiling & Optimization', [
        leaf('skills.game.unreal-engine.profiling-optimization.unreal-insights', 'Unreal Insights'),
        leaf('skills.game.unreal-engine.profiling-optimization.draw-call-optimization', 'Draw Call Optimization'),
        leaf('skills.game.unreal-engine.profiling-optimization.render-thread-optimization', 'Render Thread Optimization'),
        leaf('skills.game.unreal-engine.profiling-optimization.asset-optimization', 'Asset Optimization'),
        leaf('skills.game.unreal-engine.profiling-optimization.performance-budgeting', 'Performance Budgeting'),
      ]),
      node('skills.game.unreal-engine.plugin-module-development', 'Plugin & Module Development', [
        leaf('skills.game.unreal-engine.plugin-module-development.runtime-modules', 'Runtime & Editor Modules'),
        leaf('skills.game.unreal-engine.plugin-module-development.module-dependencies', 'Module Dependencies'),
      ]),
      node('skills.game.unreal-engine.build-engineering', 'Build Engineering', [
        leaf('skills.game.unreal-engine.build-engineering.ubt', 'UBT & UBT'),
        leaf('skills.game.unreal-engine.build-engineering.build-configurations', 'Build Configurations'),
        leaf('skills.game.unreal-engine.build-engineering.cook-pipeline', 'Cook Pipeline'),
        leaf('skills.game.unreal-engine.build-engineering.automation', 'Automation'),
      ]),
      node('skills.game.unreal-engine.physics', 'Physics', [
        leaf('skills.game.unreal-engine.physics.chaos', 'Chaos'),
        leaf('skills.game.unreal-engine.physics.collision-channels', 'Collision Channels'),
        leaf('skills.game.unreal-engine.physics.constraints', 'Constraints'),
        leaf('skills.game.unreal-engine.physics.traces-sweeps', 'Traces & Sweeps'),
      ]),
      node('skills.game.unreal-engine.vfx', 'VFX', [
        leaf('skills.game.unreal-engine.vfx.niagara', 'Niagara'),
        leaf('skills.game.unreal-engine.vfx.materials-hierarchy', 'Materials Hierarchy'),
        leaf('skills.game.unreal-engine.vfx.decals', 'Decals'),
        leaf('skills.game.unreal-engine.vfx.post-processing', 'Post Processing'),
        leaf('skills.game.unreal-engine.vfx.render-targets', 'Render Targets'),
      ]),
      node('skills.game.unreal-engine.pcg', 'PCG', [
        leaf('skills.game.unreal-engine.pcg.pcg-graphs', 'PCG Graphs'),
        leaf('skills.game.unreal-engine.pcg.runtime-generation', 'Runtime Generation'),
        leaf('skills.game.unreal-engine.pcg.spline-based', 'Spline-based & Rule-based'),
      ]),
      node('skills.game.unreal-engine.ai', 'AI', [
        leaf('skills.game.unreal-engine.ai.trees', 'Trees'),
        leaf('skills.game.unreal-engine.ai.nne', 'NNE'),
        leaf('skills.game.unreal-engine.ai.eqs', 'EQS'),
        leaf('skills.game.unreal-engine.ai.ai-perception', 'AI Perception'),
      ]),
      node('skills.game.unreal-engine.pixel-streaming-cloud-gaming', 'Pixel Streaming & Cloud Gaming', [
        leaf('skills.game.unreal-engine.pixel-streaming-cloud-gaming.webrtc', 'WebRTC'),
        leaf('skills.game.unreal-engine.pixel-streaming-cloud-gaming.signalling-server', 'Signalling Server'),
        leaf('skills.game.unreal-engine.pixel-streaming-cloud-gaming.remote-input', 'Remote Input'),
        leaf('skills.game.unreal-engine.pixel-streaming-cloud-gaming.front-end-environment', 'Front-End Environment'),
      ]),
      node('skills.game.unreal-engine.metahuman', 'MetaHuman', [
        leaf('skills.game.unreal-engine.metahuman.creator', 'Creator'),
        leaf('skills.game.unreal-engine.metahuman.animator', 'Animator'),
        leaf('skills.game.unreal-engine.metahuman.dna-assets', 'DNA Assets'),
        leaf('skills.game.unreal-engine.metahuman.optimization', 'Optimization'),
      ]),
      node('skills.game.unreal-engine.animation-systems', 'Animation Systems', [
        leaf('skills.game.unreal-engine.animation-systems.state-machines', 'State Machines'),
        leaf('skills.game.unreal-engine.animation-systems.dynamic-blending', 'Dynamic Blending'),
        leaf('skills.game.unreal-engine.animation-systems.ik', 'IK'),
        leaf('skills.game.unreal-engine.animation-systems.control-rig', 'Control Rig'),
        leaf('skills.game.unreal-engine.animation-systems.retargeting', 'Retargeting'),
        leaf('skills.game.unreal-engine.animation-systems.root-motion', 'Root Motion'),
      ]),
      node('skills.game.unreal-engine.xr', 'XR', [
        leaf('skills.game.unreal-engine.xr.hmd', 'HMD'),
        leaf('skills.game.unreal-engine.xr.hand-tracking', 'Hand Tracking'),
        leaf('skills.game.unreal-engine.xr.spatial-anchors', 'Spatial Anchors'),
        node('skills.game.unreal-engine.xr.meta-quest', 'Meta Quest', [
          leaf('skills.game.unreal-engine.xr.meta-quest.profiling-optimization', 'Profiling & Optimization'),
          leaf('skills.game.unreal-engine.xr.meta-quest.build-dependencies', 'Build Dependencies'),
        ]),
      ]),
      node('skills.game.unreal-engine.android', 'Android', [
        leaf('skills.game.unreal-engine.android.adb', 'ADB'),
        leaf('skills.game.unreal-engine.android.gradle-build-system', 'Gradle Build System'),
        leaf('skills.game.unreal-engine.android.turnkey', 'Turnkey'),
      ]),
    ]),

    node('skills.game.engine-less-skills', 'Engine-less Skills', [
      node('skills.game.engine-less-skills.graphics-api-fundamentals', 'Graphics API Fundamentals', [
        leaf('skills.game.engine-less-skills.graphics-api-fundamentals.vulkan-opengl-directx', 'Vulkan / OpenGL / DirectX'),
        leaf('skills.game.engine-less-skills.graphics-api-fundamentals.gpu-pipeline', 'GPU Pipeline'),
        leaf('skills.game.engine-less-skills.graphics-api-fundamentals.buffers', 'Buffers'),
        leaf('skills.game.engine-less-skills.graphics-api-fundamentals.textures', 'Textures'),
        leaf('skills.game.engine-less-skills.graphics-api-fundamentals.shaders', 'Shaders'),
      ]),
      node('skills.game.engine-less-skills.operating-systems', 'Operating Systems', [
        leaf('skills.game.engine-less-skills.operating-systems.computer-architecture', 'Computer Architecture'),
        leaf('skills.game.engine-less-skills.operating-systems.process-management', 'Process Management'),
        leaf('skills.game.engine-less-skills.operating-systems.thread-scheduling', 'Thread Scheduling'),
        leaf('skills.game.engine-less-skills.operating-systems.memory-management', 'Memory Management'),
        leaf('skills.game.engine-less-skills.operating-systems.virtual-memory', 'Virtual Memory'),
        leaf('skills.game.engine-less-skills.operating-systems.concurrency-multithreading', 'Concurrency & Multithreading'),
        leaf('skills.game.engine-less-skills.operating-systems.synchronization', 'Synchronization'),
        leaf('skills.game.engine-less-skills.operating-systems.ipc', 'IPC'),
        leaf('skills.game.engine-less-skills.operating-systems.file-systems', 'File Systems'),
        leaf('skills.game.engine-less-skills.operating-systems.system-calls', 'System Calls'),
      ]),
      node('skills.game.engine-less-skills.rendering-pipelines', 'Rendering Pipelines', [
        leaf('skills.game.engine-less-skills.rendering-pipelines.forward-rendering', 'Forward Rendering'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.deferred-rendering', 'Deferred Rendering'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.render-passes', 'Render Passes'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.framebuffers', 'Framebuffers'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.lighting-pipeline', 'Lighting Pipeline'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.shadow-mapping', 'Shadow Mapping'),
        leaf('skills.game.engine-less-skills.rendering-pipelines.post-processing', 'Post Processing'),
      ]),
      node('skills.game.engine-less-skills.coordinate-systems-linear-algebra', 'Coordinate Systems & Linear Algebra', [
        leaf('skills.game.engine-less-skills.coordinate-systems-linear-algebra.vector-spaces', 'Vector Spaces'),
        leaf('skills.game.engine-less-skills.coordinate-systems-linear-algebra.linear-transformations-matrices', 'Linear Transformations & Matrices'),
        leaf('skills.game.engine-less-skills.coordinate-systems-linear-algebra.elementary-matrix-operations', 'Elementary Matrix Operations'),
      ]),
      node(
        'skills.game.engine-less-skills.dynamic-game-difficulty-balancing','Dynamic Game Difficulty Balancing', [
          leaf('skills.game.engine-less-skills.dynamic-game-difficulty-balancing.player-performance-modeling','Player Performance Modeling'),
          leaf('skills.game.engine-less-skills.dynamic-game-difficulty-balancing.adaptive-difficulty-algorithms','Adaptive Difficulty Algorithms'),
      ]),
      node('skills.game.engine-less-skills.sdl3', 'SDL3', [
        leaf('skills.game.engine-less-skills.sdl3.window-management', 'Window Management'),
        leaf('skills.game.engine-less-skills.sdl3.input-handling', 'Input Handling'),
        leaf('skills.game.engine-less-skills.sdl3.event-system', 'Event System'),
        leaf('skills.game.engine-less-skills.sdl3.rendering', 'Rendering'),
        leaf('skills.game.engine-less-skills.sdl3.audio', 'Audio'),
        leaf('skills.game.engine-less-skills.sdl3.timing', 'Timing'),
      ]),
      node('skills.game.engine-less-skills.javafx', 'JavaFX', [
        leaf('skills.game.engine-less-skills.javafx.scene-graph', 'Scene Graph'),
        leaf('skills.game.engine-less-skills.javafx.canvas-rendering', 'Canvas Rendering'),
        leaf('skills.game.engine-less-skills.javafx.animation', 'Animation'),
        leaf('skills.game.engine-less-skills.javafx.event-handling', 'Event Handling'),
        leaf('skills.game.engine-less-skills.javafx.media', 'Media'),
        leaf('skills.game.engine-less-skills.javafx.ui-controls', 'UI Controls'),
      ]),
    ]),
  ]),

  // ── Software Development ─────────────────────────────────────────────
  node('skills.software-development', 'Software Development', [
    node('skills.software-development.software-engineering', 'Software Engineering', [
      leaf('skills.software-development.software-engineering.sdlc', 'SDLC'),
      leaf('skills.software-development.software-engineering.software-design-patterns', 'Software Design Patterns'),
      leaf('skills.software-development.software-engineering.scrum', 'Scrum'),
      leaf('skills.software-development.software-engineering.ci-cd', 'CI/CD'),
    ]),
    node('skills.software-development.web-development', 'Web Development', [
      node('skills.software-development.web-development.frontend', 'Frontend', [
        leaf('skills.software-development.web-development.frontend.html-css-js', 'HTML / CSS / JavaScript'),
        leaf('skills.software-development.web-development.frontend.react', 'React'),
        leaf('skills.software-development.web-development.frontend.wordpress', 'Wordpress'),
      ]),
      node('skills.software-development.web-development.backend', 'Backend', [
        leaf('skills.software-development.web-development.backend.nodejs', 'Node.js'),
        leaf('skills.software-development.web-development.backend.dotnet', '.NET'),
        leaf('skills.software-development.web-development.backend.nosql-rdbms', 'NoSQL / RDBMS'),
        leaf('skills.software-development.web-development.backend.restful-apis', 'RESTful APIs'),
        leaf('skills.software-development.web-development.backend.automation & N8N', 'automation & N8N'),
      ]),
      node('skills.software-development.web-development.networking', 'Networking', [
        leaf('skills.software-development.web-development.networking.http-https', 'HTTP / HTTPS'),
        leaf('skills.software-development.web-development.networking.osi-model', 'OSI Model'),
        leaf('skills.software-development.web-development.networking.routing', 'Routing'),
      ]),
    ]),
    node('skills.software-development.system-programming', 'System Programming', [
      node('skills.software-development.system-programming.programming-languages', 'Programming Languages', [
        leaf('skills.software-development.system-programming.programming-languages.c-cpp', 'C / C++'),
        leaf('skills.software-development.system-programming.programming-languages.java', 'Java'),
        leaf('skills.software-development.system-programming.programming-languages.python', 'Python'),
        leaf('skills.software-development.system-programming.programming-languages.csharp', 'C#'),
      ]),
      node('skills.software-development.system-programming.frameworks', 'Frameworks', [
        leaf('skills.software-development.system-programming.frameworks.dotnet', '.NET'),
        leaf('skills.software-development.system-programming.frameworks.qt', 'Qt'),
        leaf('skills.software-development.system-programming.frameworks.winui3', 'WinUI 3'),
        leaf('skills.software-development.system-programming.frameworks.javafx', 'JavaFX'),
      ]),
    ]),
  ]),

  // ── Computer Science (EDU) ───────────────────────────────────────────
  node('skills.computer-science', 'Computer Science', [
    node('skills.computer-science.data-structures', 'Data Structures', [
      leaf('skills.computer-science.data-structures.linear-data-structures', 'Linear Data Structures'),
      leaf('skills.computer-science.data-structures.tree-data-structures', 'Tree Data Structures'),
      leaf('skills.computer-science.data-structures.graph-data-structures', 'Graph Data Structures'),
    ]),
    node('skills.computer-science.algorithms-design', 'Algorithms Design', [
      leaf('skills.computer-science.algorithms-design.complexity-analysis', 'Complexity Analysis'),
      leaf('skills.computer-science.algorithms-design.divide-and-conquer', 'Divide & Conquer'),
      leaf('skills.computer-science.algorithms-design.greedy-algorithms', 'Greedy Algorithms'),
      leaf('skills.computer-science.algorithms-design.dynamic-programming', 'Dynamic Programming'),
    ]),
    node('skills.computer-science.artificial-intelligence', 'Artificial Intelligence', [
      leaf('skills.computer-science.artificial-intelligence.search-algorithms', 'Search Algorithms'),
      leaf('skills.computer-science.artificial-intelligence.game-theory', 'Game Theory'),
      leaf('skills.computer-science.artificial-intelligence.deep-learning', 'Deep Learning'),
      leaf('skills.computer-science.artificial-intelligence.pytorch', 'PyTorch'),
    ]),
    node('skills.computer-science.data-base', 'Data Base', [
      leaf('skills.computer-science.data-base.relational-model', 'Relational Model'),
      leaf('skills.computer-science.data-base.nosql', 'NoSQL'),
    ]),
    node('skills.computer-science.language-theory', 'Language Theory', [
      leaf('skills.computer-science.language-theory.formal-languages', 'Formal Languages'),
      leaf('skills.computer-science.language-theory.automata-theory', 'Automata Theory'),
      leaf('skills.computer-science.language-theory.semantic-analysis', 'Semantic Analysis'),
      leaf('skills.computer-science.language-theory.turing-machines', 'Turing Machines'),
    ]),
    node('skills.computer-science.graph-theory', 'Graph Theory', [
      leaf('skills.computer-science.graph-theory.trees-distance', 'Trees & Distance'),
      leaf('skills.computer-science.graph-theory.matching-factors', 'Matching Factors'),
      leaf('skills.computer-science.graph-theory.connectivity-concepts', 'Connectivity Concepts'),
      leaf('skills.computer-science.graph-theory.coloring', 'Coloring'),
    ]),
    node('skills.computer-science.linear-algebra', 'Linear Algebra', [
      leaf('skills.computer-science.linear-algebra.matrix-operations', 'Matrix Operations'),
      leaf('skills.computer-science.linear-algebra.vector-spaces', 'Vector Spaces'),
      leaf('skills.computer-science.linear-algebra.eigenvalues-eigenvectors', 'Eigenvalues and Eigenvectors'),
      leaf('skills.computer-science.linear-algebra.linear-transformations', 'Linear Transformations'),
      leaf('skills.computer-science.linear-algebra.equations-systems', 'Equations and Systems of Equations'),
    ]),
  ]),

  // ── Computer Engineering (EDU) ───────────────────────────────────────
  node('skills.computer-engineering', 'Computer Engineering', [
    node('skills.computer-engineering.operating-systems', 'Operating Systems', [
      leaf('skills.computer-engineering.operating-systems.computer-architecture', 'Computer Architecture'),
      leaf('skills.computer-engineering.operating-systems.process-management', 'Process Management'),
      leaf('skills.computer-engineering.operating-systems.thread-scheduling', 'Thread Scheduling'),
      leaf('skills.computer-engineering.operating-systems.memory-management', 'Memory Management'),
      leaf('skills.computer-engineering.operating-systems.virtual-memory', 'Virtual Memory'),
      leaf('skills.computer-engineering.operating-systems.concurrency-multithreading', 'Concurrency & Multithreading'),
      leaf('skills.computer-engineering.operating-systems.synchronization', 'Synchronization'),
      leaf('skills.computer-engineering.operating-systems.ipc', 'IPC'),
      leaf('skills.computer-engineering.operating-systems.file-systems', 'File Systems'),
      leaf('skills.computer-engineering.operating-systems.system-calls', 'System Calls'),
    ]),
    node('skills.computer-engineering.computer-architecture', 'Computer Architecture', [
      leaf('skills.computer-engineering.computer-architecture.assembly-language', 'Assembly Language'),
      leaf('skills.computer-engineering.computer-architecture.hw-sw-co-design', 'HS Co-Design'),
      leaf('skills.computer-engineering.computer-architecture.system-synthesis', 'System Synthesis'),
    ]),
    node('skills.computer-engineering.compiler-design', 'Compiler Design', [
      leaf('skills.computer-engineering.compiler-design.compiler-optimization', 'Compiler Optimization'),
      node('skills.computer-engineering.compiler-design.parsing', 'Parsing', [
        leaf('skills.computer-engineering.compiler-design.parsing.lexical-analysis', 'Lexical Analysis'),
        leaf('skills.computer-engineering.compiler-design.parsing.syntax-analysis', 'Syntax Analysis'),
      ]),
      leaf('skills.computer-engineering.compiler-design.obfuscation-techniques', 'Obfuscation Techniques'),
    ]),
    node('skills.computer-engineering.computer-networks', 'Computer Networks', [
      node('skills.computer-engineering.computer-networks.osi-model', 'OSI Model', [
        leaf('skills.computer-engineering.computer-networks.osi-model.application-layer', 'HTTP/HTTPS, FTP, SMTP, DNS, SSH, DHCP'),
        leaf('skills.computer-engineering.computer-networks.osi-model.transport-layer', 'TCP, UDP'),
        leaf('skills.computer-engineering.computer-networks.osi-model.network-layer', 'IP, ICMP, ARP'),
        leaf('skills.computer-engineering.computer-networks.osi-model.data-link-layer', 'Data Link'),
        leaf('skills.computer-engineering.computer-networks.osi-model.physical-layer', 'Physical Transmission Protocols'),
      ]),
      leaf('skills.computer-engineering.computer-networks.queuing-theory', 'Queuing Theory'),
      leaf('skills.computer-engineering.computer-networks.network-simulation', 'Network Simulation'),
    ]),
    node('skills.computer-engineering.hardware-design', 'Hardware Design', [
      leaf('skills.computer-engineering.hardware-design.hdl', 'HDL (Verilog, VHDL)'),
      node('skills.computer-engineering.hardware-design.microprocessors', 'Microprocessors', [
        leaf('skills.computer-engineering.hardware-design.microprocessors.addressing-modes', 'Addressing Modes'),
        leaf('skills.computer-engineering.hardware-design.microprocessors.instruction-set', 'Instruction Set'),
        leaf('skills.computer-engineering.hardware-design.microprocessors.interrupts', 'Interrupts'),
        leaf('skills.computer-engineering.hardware-design.microprocessors.system-lifecycle', 'System Lifecycle'),
      ]),
      leaf('skills.computer-engineering.hardware-design.hardware-simulation', 'Hardware Simulation'),
      leaf('skills.computer-engineering.hardware-design.logic-circuit-design', 'Logic Circuit Design'),
    ]),
    node('skills.computer-engineering.numerical-analysis', 'Numerical Analysis', [
      leaf('skills.computer-engineering.numerical-analysis.numerical-methods', 'Numerical Methods'),
      leaf('skills.computer-engineering.numerical-analysis.numerical-integration-differentiation', 'Numerical Integration & Differentiation'),
      leaf('skills.computer-engineering.numerical-analysis.numerical-optimization', 'Numerical Optimization'),
      leaf('skills.computer-engineering.numerical-analysis.numerical-linear-algebra', 'Numerical Linear Algebra'),
    ]),
  ]),
]);
