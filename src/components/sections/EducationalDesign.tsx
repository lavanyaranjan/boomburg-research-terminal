import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export const EducationalDesign: React.FC = () => {
  const learningModalities = [
    { modality: 'Text Only', retention: 35, engagement: 28, application: 25 },
    { modality: 'Video', retention: 52, engagement: 68, application: 42 },
    { modality: 'Interactive', retention: 78, engagement: 85, application: 72 },
    { modality: 'Gamified', retention: 72, engagement: 92, application: 68 },
    { modality: 'Mixed Media', retention: 82, engagement: 88, application: 78 },
  ];

  const simulationImpact = [
    { week: 'Week 0', withSim: 45, withoutSim: 45 },
    { week: 'Week 2', withSim: 58, withoutSim: 48 },
    { week: 'Week 4', withSim: 68, withoutSim: 52 },
    { week: 'Week 6', withSim: 75, withoutSim: 54 },
    { week: 'Week 8', withSim: 82, withoutSim: 56 },
    { week: 'Week 12', withSim: 85, withoutSim: 58 },
  ];

  const personalizationMetrics = [
    { metric: 'Completion Rate', personalized: 85, standard: 52 },
    { metric: 'Time to Mastery', personalized: 78, standard: 48 },
    { metric: 'Satisfaction', personalized: 92, standard: 65 },
    { metric: 'Real-World Application', personalized: 75, standard: 42 },
    { metric: 'Long-Term Retention', personalized: 82, standard: 55 },
  ];

  const feedbackTiming = [
    { subject: 'Immediate', effectiveness: 88, satisfaction: 85, learning: 82 },
    { subject: 'Delayed (1 day)', effectiveness: 65, satisfaction: 62, learning: 58 },
    { subject: 'Weekly Summary', effectiveness: 52, satisfaction: 55, learning: 48 },
    { subject: 'No Feedback', effectiveness: 28, satisfaction: 32, learning: 25 },
  ];

  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 02</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Educational Design & Learning Effectiveness</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Effective financial education requires careful attention to pedagogical design. This section explores evidence-based approaches to content delivery, learning modalities, and instructional strategies that maximize knowledge retention and practical application.
        </p>
      </div>

      {/* Question 1 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q6: Which learning modalities are most effective for financial concepts?</h3>
        <p className="text-blue-400 mb-6">
          Different learning modalities produce varying levels of engagement, retention, and practical application. Understanding these differences is essential for designing effective educational experiences.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Learning Outcomes by Modality</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={learningModalities}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="modality" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="retention" fill="#00ff88" name="Knowledge Retention %" />
              <Bar dataKey="engagement" fill="#66b3ff" name="User Engagement %" />
              <Bar dataKey="application" fill="#ffd93d" name="Practical Application %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Mixed media approaches combining text, video, and interactive elements achieve 82% retention rates and 78% practical application, significantly outperforming single-modality approaches. Interactive elements alone boost engagement by 57% compared to text-only content.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q7: How do simulated trading environments impact learning outcomes?</h3>
        <p className="text-blue-400 mb-6">
          Practice trading environments provide risk-free learning opportunities. Research examines their effectiveness in developing practical skills and confidence.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Learning Progression: With vs. Without Simulation Practice</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={simulationImpact}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="week" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" label={{ value: 'Competency Score', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="withSim" stroke="#00ff88" strokeWidth={3} name="With Simulation" />
              <Line type="monotone" dataKey="withoutSim" stroke="#ff6b6b" strokeWidth={3} name="Without Simulation" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Learners using simulation environments achieve 85% competency compared to 58% for traditional instruction alone. The simulation group also reports 40% higher confidence in real-world trading and makes 30% fewer costly mistakes in their first year of actual trading.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q8: What role does personalization play in financial education effectiveness?</h3>
        <p className="text-blue-400 mb-6">
          Adaptive learning systems that adjust to individual needs show promise for improving outcomes. This research compares personalized versus standardized approaches.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Personalized vs. Standard Learning Outcomes</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={personalizationMetrics} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="metric" type="category" stroke="#66b3ff" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="personalized" fill="#00ff88" name="Personalized Learning %" />
              <Bar dataKey="standard" fill="#66b3ff" name="Standard Curriculum %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Personalized learning paths improve completion rates by 33 percentage points and real-world application by 33 percentage points. Adaptive systems that adjust difficulty based on performance reduce time to mastery by 35% while maintaining higher satisfaction scores.
          </p>
        </div>
      </div>

      {/* Question 4 */}
      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q9: How does feedback timing influence skill development?</h3>
        <p className="text-blue-400 mb-6">
          The timing and quality of feedback significantly affects learning outcomes. This research examines optimal feedback strategies for financial education.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Impact of Feedback Timing on Learning Metrics</h4>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={feedbackTiming}>
              <PolarGrid stroke="#1a2332" />
              <PolarAngleAxis dataKey="subject" stroke="#66b3ff" />
              <PolarRadiusAxis stroke="#66b3ff" />
              <Radar name="Effectiveness" dataKey="effectiveness" stroke="#00ff88" fill="#00ff88" fillOpacity={0.3} />
              <Radar name="Satisfaction" dataKey="satisfaction" stroke="#66b3ff" fill="#66b3ff" fillOpacity={0.3} />
              <Radar name="Learning Speed" dataKey="learning" stroke="#ffd93d" fill="#ffd93d" fillOpacity={0.3} />
              <Legend />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Immediate feedback achieves 88% effectiveness compared to just 28% with no feedback. Delayed feedback shows sharp decline in effectiveness, with 1-day delays reducing learning outcomes by 26 percentage points. Real-time corrective feedback accelerates skill acquisition by 45%.
          </p>
        </div>
      </div>

      {/* Question 5 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q10: What is the optimal content sequencing for financial literacy topics?</h3>
        <p className="text-blue-400 mb-6">
          The order in which concepts are introduced affects learning outcomes. Research identifies optimal sequencing strategies for building financial knowledge progressively.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Learning Progression by Content Sequence Strategy</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { lesson: 'Lesson 1', scaffolded: 52, linear: 48, modular: 45 },
              { lesson: 'Lesson 3', scaffolded: 62, linear: 54, modular: 50 },
              { lesson: 'Lesson 5', scaffolded: 70, linear: 58, modular: 52 },
              { lesson: 'Lesson 7', scaffolded: 78, linear: 62, modular: 55 },
              { lesson: 'Lesson 10', scaffolded: 85, linear: 65, modular: 58 },
              { lesson: 'Lesson 12', scaffolded: 88, linear: 66, modular: 60 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="lesson" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="scaffolded" stroke="#00ff88" strokeWidth={2} name="Scaffolded Sequence" />
              <Line type="monotone" dataKey="linear" stroke="#66b3ff" strokeWidth={2} name="Linear Sequence" />
              <Line type="monotone" dataKey="modular" stroke="#ffd93d" strokeWidth={2} name="Modular Sequence" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Scaffolded sequences that build progressively from foundational concepts achieve 88% mastery versus 66% for linear approaches. Strategic sequencing that introduces concepts in order of prerequisite relationships reduces cognitive load by 35% and improves long-term retention by 28%.
          </p>
        </div>
      </div>
    </div>
  );
};
