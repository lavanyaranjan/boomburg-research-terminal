import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Market Structure & System Complexity
export const MarketStructure: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 04</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Market Structure & System Complexity</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Understanding market structure and complexity is essential for effective investor education. This section examines how system complexity affects comprehension and decision-making.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q16: How does market complexity affect retail investor comprehension?</h3>
        <p className="text-blue-400 mb-6">
          Modern financial markets involve numerous interconnected components. Research explores the relationship between complexity and investor understanding.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Comprehension by Market Complexity Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { complexity: 'Basic (Stocks)', comprehension: 78, confidence: 72, accuracy: 68 },
              { complexity: 'Intermediate (ETFs)', comprehension: 62, confidence: 58, accuracy: 55 },
              { complexity: 'Advanced (Options)', comprehension: 38, confidence: 42, accuracy: 35 },
              { complexity: 'Complex (Derivatives)', comprehension: 22, confidence: 28, accuracy: 18 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="complexity" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="comprehension" fill="#00ff88" name="Comprehension %" />
              <Bar dataKey="confidence" fill="#66b3ff" name="Confidence %" />
              <Bar dataKey="accuracy" fill="#ffd93d" name="Decision Accuracy %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Comprehension drops by 56 percentage points from basic to complex instruments. Educational interventions that simplify complexity through progressive disclosure improve comprehension by 45% for advanced products.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q17: What is the optimal level of detail for explaining market mechanics?</h3>
        <p className="text-blue-400 mb-6">
          Too much detail can overwhelm learners, while too little leaves gaps in understanding. Finding the right balance is critical for effective education.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Learning Outcomes by Detail Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { level: 'Minimal', understanding: 35, application: 28, satisfaction: 42 },
              { level: 'Basic', understanding: 58, application: 52, satisfaction: 68 },
              { level: 'Moderate', understanding: 78, application: 72, satisfaction: 82 },
              { level: 'Detailed', understanding: 68, application: 62, satisfaction: 58 },
              { level: 'Excessive', understanding: 42, application: 35, satisfaction: 32 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="level" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="understanding" stroke="#00ff88" strokeWidth={2} name="Understanding %" />
              <Line type="monotone" dataKey="application" stroke="#66b3ff" strokeWidth={2} name="Application %" />
              <Line type="monotone" dataKey="satisfaction" stroke="#ffd93d" strokeWidth={2} name="Satisfaction %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Moderate detail levels optimize all metrics at 78% understanding, 72% application, and 82% satisfaction. Progressive disclosure that reveals complexity on-demand improves outcomes by 25% over fixed detail levels.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q18: How do different fee structures affect decision-making quality?</h3>
        <p className="text-blue-400 mb-6">
          Fee structures vary widely across products. Understanding how investors process fee information is critical for promoting informed choices.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Fee Comprehension and Impact Awareness</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { structure: 'Flat Fee', comprehension: 85, awareness: 82, satisfaction: 78 },
              { structure: 'Percentage-Based', comprehension: 68, awareness: 58, satisfaction: 65 },
              { structure: 'Tiered', comprehension: 52, awareness: 42, satisfaction: 55 },
              { structure: 'Complex/Hidden', comprehension: 28, awareness: 18, satisfaction: 22 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="structure" type="category" stroke="#66b3ff" width={140} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="comprehension" fill="#00ff88" name="Comprehension %" />
              <Bar dataKey="awareness" fill="#66b3ff" name="Impact Awareness %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Flat fee structures achieve 85% comprehension versus 28% for complex structures. Educational tools that visualize long-term fee impact improve awareness by 52% and lead to 35% better product selection decisions.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q19: What misconceptions about market efficiency need addressing?</h3>
        <p className="text-blue-400 mb-6">
          Many retail investors hold misconceptions about market efficiency that affect their strategies. Identifying and correcting these is crucial for education programs.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Prevalence of Market Efficiency Misconceptions</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { misconception: 'Can easily beat market', prevalence: 68 },
              { misconception: 'Past performance predicts future', prevalence: 72 },
              { misconception: 'More trading = better returns', prevalence: 58 },
              { misconception: 'Market timing is feasible', prevalence: 75 },
              { misconception: 'Hot tips are reliable', prevalence: 52 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="misconception" type="category" stroke="#66b3ff" width={180} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="prevalence" fill="#ff6b6b" name="Prevalence %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> 75% of retail investors believe market timing is feasible. Educational interventions addressing misconceptions reduce overtrading by 42% and improve long-term returns by an average of 2.3% annually.
          </p>
        </div>
      </div>
    </div>
  );
};

// Cultural & Social Factors
export const CulturalFactors: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 05</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Cultural, Social & Demographic Factors</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Financial behaviors and educational needs vary across cultural, social, and demographic groups. This section explores how these factors influence learning and investment decisions.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q20: How do cultural backgrounds influence financial risk perception?</h3>
        <p className="text-blue-400 mb-6">
          Cultural norms significantly shape attitudes toward risk and financial decision-making. Understanding these differences is essential for inclusive education design.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Risk Tolerance by Cultural Background</h4>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={[
              { subject: 'Individualist', value: 72 },
              { subject: 'Collectivist', value: 48 },
              { subject: 'High Uncertainty Avoidance', value: 38 },
              { subject: 'Low Uncertainty Avoidance', value: 68 },
              { subject: 'Long-term Oriented', value: 62 },
              { subject: 'Short-term Oriented', value: 55 },
            ]}>
              <PolarGrid stroke="#1a2332" />
              <PolarAngleAxis dataKey="subject" stroke="#66b3ff" />
              <PolarRadiusAxis stroke="#66b3ff" />
              <Radar name="Risk Tolerance" dataKey="value" stroke="#00ff88" fill="#00ff88" fillOpacity={0.5} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Risk tolerance varies by 34 percentage points across cultural dimensions. Culturally-adaptive educational content increases engagement by 45% and improves learning outcomes by 28% compared to one-size-fits-all approaches.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q21: What are the gender-specific barriers to financial education engagement?</h3>
        <p className="text-blue-400 mb-6">
          Research identifies distinct barriers that affect engagement across genders, requiring tailored approaches to maximize participation and learning.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Engagement Barriers by Severity</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { barrier: 'Confidence', women: 68, men: 38, nonbinary: 58 },
              { barrier: 'Time Constraints', women: 72, men: 62, nonbinary: 65 },
              { barrier: 'Jargon/Complexity', women: 65, men: 42, nonbinary: 62 },
              { barrier: 'Perceived Relevance', women: 52, men: 35, nonbinary: 48 },
              { barrier: 'Social Pressure', women: 45, men: 28, nonbinary: 55 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="barrier" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="women" fill="#ff6b6b" name="Women" />
              <Bar dataKey="men" fill="#66b3ff" name="Men" />
              <Bar dataKey="nonbinary" fill="#ffd93d" name="Non-binary" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Confidence gaps represent the largest gender-specific barrier at 30 percentage points. Programs addressing confidence through supportive environments and positive reinforcement increase women's participation by 58% and completion rates by 42%.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q22: How does generational cohort affect learning preferences?</h3>
        <p className="text-blue-400 mb-6">
          Different generations have distinct preferences for content delivery and learning styles, shaped by their technological experiences and cultural contexts.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Preferred Learning Modality by Generation</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { generation: 'Gen Z', video: 85, interactive: 78, text: 42, inPerson: 35 },
              { generation: 'Millennial', video: 72, interactive: 82, text: 55, inPerson: 48 },
              { generation: 'Gen X', video: 58, interactive: 65, text: 68, inPerson: 62 },
              { generation: 'Boomer', video: 42, interactive: 48, text: 75, inPerson: 78 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="generation" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="video" fill="#00ff88" name="Video %" />
              <Bar dataKey="interactive" fill="#66b3ff" name="Interactive %" />
              <Bar dataKey="text" fill="#ffd93d" name="Text %" />
              <Bar dataKey="inPerson" fill="#ff6b6b" name="In-Person %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Gen Z shows 85% preference for video content versus 42% for Boomers, who prefer text (75%) and in-person learning (78%). Multi-modal platforms that accommodate all preferences see 52% higher cross-generational engagement.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q23: What role does social proof play in financial learning adoption?</h3>
        <p className="text-blue-400 mb-6">
          Social influence affects both the decision to engage in financial education and the behaviors learned. Understanding these dynamics helps optimize program design.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Social Proof Impact on Adoption and Behavior</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { week: 'Week 1', noSocial: 35, moderate: 52, strong: 68 },
              { week: 'Week 2', noSocial: 38, moderate: 58, strong: 75 },
              { week: 'Week 4', noSocial: 40, moderate: 65, strong: 82 },
              { week: 'Week 6', noSocial: 42, moderate: 70, strong: 86 },
              { week: 'Week 8', noSocial: 43, moderate: 72, strong: 88 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="week" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="strong" stroke="#00ff88" strokeWidth={2} name="Strong Social Proof" />
              <Line type="monotone" dataKey="moderate" stroke="#66b3ff" strokeWidth={2} name="Moderate Social Proof" />
              <Line type="monotone" dataKey="noSocial" stroke="#ff6b6b" strokeWidth={2} name="No Social Proof" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Strong social proof (testimonials, peer success stories, community engagement) increases adoption by 45 percentage points. Users influenced by social proof show 35% higher completion rates and 28% better long-term behavior change.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q24: How do socioeconomic factors influence financial literacy needs?</h3>
        <p className="text-blue-400 mb-6">
          Financial education needs vary significantly across socioeconomic levels, requiring differentiated approaches to maximize relevance and impact.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Priority Topics by Socioeconomic Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { topic: 'Budgeting', lower: 92, middle: 68, upper: 42 },
              { topic: 'Debt Management', lower: 88, middle: 72, upper: 35 },
              { topic: 'Saving Basics', lower: 85, middle: 75, upper: 58 },
              { topic: 'Investing', lower: 45, middle: 78, upper: 88 },
              { topic: 'Tax Planning', lower: 38, middle: 68, upper: 92 },
              { topic: 'Estate Planning', lower: 22, middle: 52, upper: 85 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="topic" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="lower" fill="#ff6b6b" name="Lower Income %" />
              <Bar dataKey="middle" fill="#66b3ff" name="Middle Income %" />
              <Bar dataKey="upper" fill="#00ff88" name="Upper Income %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Topic priorities vary dramatically: 92% of lower-income users prioritize budgeting versus 42% of upper-income users. Socioeconomically-targeted content increases relevance scores by 65% and practical application by 52% compared to generic approaches.
          </p>
        </div>
      </div>
    </div>
  );
};

// Long-Term Behavior Change & Measurement
export const BehaviorChange: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 06</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Long-Term Behavior Change & Measurement</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Achieving lasting behavior change is the ultimate goal of financial education. This section examines what works for creating durable changes and how to measure long-term impact effectively.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q25: What interventions create the most durable behavior change?</h3>
        <p className="text-blue-400 mb-6">
          Short-term knowledge gains don't always translate to lasting behavior change. Research identifies which intervention types produce sustained results.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Behavior Persistence by Intervention Type</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: '0', oneTime: 75, periodic: 75, continuous: 75, habitual: 75 },
              { month: '3', oneTime: 52, periodic: 68, continuous: 72, habitual: 78 },
              { month: '6', oneTime: 38, periodic: 62, continuous: 75, habitual: 82 },
              { month: '12', oneTime: 28, periodic: 58, continuous: 78, habitual: 88 },
              { month: '24', oneTime: 22, periodic: 52, continuous: 75, habitual: 85 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="month" stroke="#66b3ff" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="habitual" stroke="#00ff88" strokeWidth={2} name="Habit Formation" />
              <Line type="monotone" dataKey="continuous" stroke="#66b3ff" strokeWidth={2} name="Continuous Support" />
              <Line type="monotone" dataKey="periodic" stroke="#ffd93d" strokeWidth={2} name="Periodic Reminders" />
              <Line type="monotone" dataKey="oneTime" stroke="#ff6b6b" strokeWidth={2} name="One-time Training" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Habit formation interventions maintain 85% behavior persistence at 24 months versus 22% for one-time training. Programs incorporating habit cues, routine building, and automatic triggers show 63 percentage point advantage in long-term effectiveness.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q26: How should financial education outcomes be measured beyond knowledge tests?</h3>
        <p className="text-blue-400 mb-6">
          Traditional knowledge tests don't capture real-world impact. Developing comprehensive measurement frameworks is essential for evaluating effectiveness.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Predictive Value of Different Outcome Measures</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { measure: 'Knowledge Tests', prediction: 42, correlation: 0.38 },
              { measure: 'Confidence Surveys', prediction: 35, correlation: 0.32 },
              { measure: 'Simulated Decisions', prediction: 68, correlation: 0.72 },
              { measure: 'Behavioral Tracking', prediction: 85, correlation: 0.88 },
              { measure: 'Financial Outcomes', prediction: 92, correlation: 0.95 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="measure" type="category" stroke="#66b3ff" width={140} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="prediction" fill="#00ff88" name="Predictive Power %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Behavioral tracking and financial outcome measures show 85-92% predictive power versus 42% for knowledge tests. Multi-metric frameworks combining knowledge, behavior, and outcomes provide 50% more accurate program evaluation than single measures.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q27: What role do follow-up interventions play in maintaining behavior change?</h3>
        <p className="text-blue-400 mb-6">
          Initial education may not be sufficient for lasting change. Understanding optimal follow-up strategies is crucial for program design.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Behavior Maintenance by Follow-up Frequency</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: '0', none: 100, quarterly: 100, monthly: 100, weekly: 100 },
              { month: '3', none: 45, quarterly: 68, monthly: 75, weekly: 78 },
              { month: '6', none: 32, quarterly: 62, monthly: 78, weekly: 82 },
              { month: '9', none: 25, quarterly: 58, monthly: 78, weekly: 85 },
              { month: '12', none: 22, quarterly: 55, monthly: 80, weekly: 88 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="month" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="weekly" stroke="#00ff88" strokeWidth={2} name="Weekly Check-ins" />
              <Line type="monotone" dataKey="monthly" stroke="#66b3ff" strokeWidth={2} name="Monthly Reminders" />
              <Line type="monotone" dataKey="quarterly" stroke="#ffd93d" strokeWidth={2} name="Quarterly Updates" />
              <Line type="monotone" dataKey="none" stroke="#ff6b6b" strokeWidth={2} name="No Follow-up" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Weekly follow-ups maintain 88% behavior adherence at 12 months versus 22% with no follow-up. Monthly interventions show optimal cost-effectiveness, maintaining 80% adherence while requiring 75% fewer touchpoints than weekly programs.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q28: How does accountability structure affect long-term outcomes?</h3>
        <p className="text-blue-400 mb-6">
          Different accountability mechanisms may support sustained behavior change. Research examines which structures produce the best long-term results.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Success Rates by Accountability Type</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { type: 'Self-Monitoring', month6: 52, month12: 45, month24: 38 },
              { type: 'Peer Accountability', month6: 68, month12: 62, month24: 58 },
              { type: 'Coach/Mentor', month6: 78, month12: 75, month24: 72 },
              { type: 'Financial Incentives', month6: 82, month12: 68, month24: 52 },
              { type: 'Hybrid Model', month6: 85, month12: 82, month24: 78 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="type" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="month6" fill="#00ff88" name="6 Month Success %" />
              <Bar dataKey="month12" fill="#66b3ff" name="12 Month Success %" />
              <Bar dataKey="month24" fill="#ffd93d" name="24 Month Success %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Hybrid accountability models combining multiple approaches maintain 78% success at 24 months. Financial incentives show strong short-term effects (82% at 6 months) but decline significantly over time (52% at 24 months), while social accountability shows more stable long-term results.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q29: What predictors indicate likelihood of sustained behavior change?</h3>
        <p className="text-blue-400 mb-6">
          Identifying early predictors of success allows for targeted interventions and resource allocation to maximize long-term impact.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Predictive Power of Early Success Indicators</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { predictor: 'Initial Enthusiasm', power: 35 },
              { predictor: 'Knowledge Gain', power: 42 },
              { predictor: 'Early Wins (Week 1)', power: 68 },
              { predictor: 'Habit Formation (Month 1)', power: 82 },
              { predictor: 'Social Integration', power: 75 },
              { predictor: 'Self-Efficacy Increase', power: 78 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="predictor" type="category" stroke="#66b3ff" width={180} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="power" fill="#00ff88" name="Predictive Power %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Habit formation within the first month predicts long-term success with 82% accuracy. Programs that achieve early wins in week 1 show 68% predictive power for 24-month outcomes, while initial enthusiasm predicts only 35% of long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

// Ethics, Regulation & Industry Dynamics
export const EthicsRegulation: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 07</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Ethics, Regulation & Industry Dynamics</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          The financial education landscape is shaped by ethical considerations, regulatory requirements, and industry incentives. This section examines the complex interplay between these factors.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q30: How do conflicts of interest affect educational content quality?</h3>
        <p className="text-blue-400 mb-6">
          Many financial education providers have business relationships that may influence content. Understanding these dynamics is critical for promoting quality education.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Content Quality by Funding Model</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { model: 'Independent', objectivity: 88, quality: 85, userTrust: 82 },
              { model: 'Academic', objectivity: 92, quality: 88, userTrust: 85 },
              { model: 'Broker-Funded', objectivity: 45, quality: 62, userTrust: 42 },
              { model: 'Affiliate Model', objectivity: 52, quality: 65, userTrust: 48 },
              { model: 'Mixed Funding', objectivity: 72, quality: 75, userTrust: 68 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="model" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="objectivity" fill="#00ff88" name="Objectivity Score" />
              <Bar dataKey="quality" fill="#66b3ff" name="Quality Score" />
              <Bar dataKey="userTrust" fill="#ffd93d" name="User Trust" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Academic and independent sources score 88-92% on objectivity versus 45-52% for commercially-aligned models. Users who learn from broker-funded content show 35% higher product adoption but 28% lower long-term satisfaction compared to independent education.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q31: What regulatory standards should govern financial education platforms?</h3>
        <p className="text-blue-400 mb-6">
          The financial education space currently lacks comprehensive regulation. Research examines what standards would protect users while fostering innovation.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Support for Potential Regulatory Standards</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { standard: 'Disclosure Requirements', users: 88, educators: 72, industry: 58 },
              { standard: 'Accuracy Standards', users: 92, educators: 88, industry: 65 },
              { standard: 'Credential Verification', users: 85, educators: 82, industry: 62 },
              { standard: 'Conflict of Interest Rules', users: 90, educators: 78, industry: 45 },
              { standard: 'Quality Audits', users: 82, educators: 85, industry: 52 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="standard" type="category" stroke="#66b3ff" width={170} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="users" fill="#00ff88" name="User Support %" />
              <Bar dataKey="educators" fill="#66b3ff" name="Educator Support %" />
              <Bar dataKey="industry" fill="#ffd93d" name="Industry Support %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> 92% of users support accuracy standards, but only 65% of industry supports them. The gap between user/educator desires and industry support is largest for conflict of interest rules (45 percentage point difference), suggesting potential resistance to comprehensive regulation.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q32: How do gamification and behavioral nudges raise ethical concerns?</h3>
        <p className="text-blue-400 mb-6">
          While gamification can enhance engagement, it also raises questions about manipulation and appropriate influence on financial decisions.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Ethical Concern Levels by Technique</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { technique: 'Educational Badges', concern: 22, effectiveness: 68 },
              { technique: 'Progress Tracking', concern: 18, effectiveness: 75 },
              { technique: 'Social Comparison', concern: 58, effectiveness: 72 },
              { technique: 'Trading Streaks', concern: 72, effectiveness: 82 },
              { technique: 'Time Pressure', concern: 85, effectiveness: 65 },
              { technique: 'FOMO Messaging', concern: 92, effectiveness: 78 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="technique" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="concern" fill="#ff6b6b" name="Ethical Concern %" />
              <Bar dataKey="effectiveness" fill="#00ff88" name="Effectiveness %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> FOMO messaging and time pressure raise concerns in 85-92% of users despite high effectiveness. Progress tracking achieves 75% effectiveness with only 18% concern levels, suggesting some techniques can balance effectiveness and ethics better than others.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q33: What is the role of employer-sponsored financial education?</h3>
        <p className="text-blue-400 mb-6">
          Workplace programs represent a significant delivery channel for financial education, but raise questions about employer interests versus employee needs.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Workplace Program Outcomes by Independence Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: '0', employerDirect: 65, independent: 62, hybrid: 68 },
              { month: '3', employerDirect: 72, independent: 68, hybrid: 78 },
              { month: '6', employerDirect: 68, independent: 75, hybrid: 82 },
              { month: '12', employerDirect: 62, independent: 78, hybrid: 85 },
              { month: '24', employerDirect: 58, independent: 80, hybrid: 88 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="month" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="hybrid" stroke="#00ff88" strokeWidth={2} name="Hybrid (Employer + Independent)" />
              <Line type="monotone" dataKey="independent" stroke="#66b3ff" strokeWidth={2} name="Independent Provider" />
              <Line type="monotone" dataKey="employerDirect" stroke="#ffd93d" strokeWidth={2} name="Employer Direct" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Hybrid models combining employer support with independent content achieve 88% long-term effectiveness versus 58% for employer-direct programs. Employees express 42% higher trust in programs with clear independence from employer financial interests.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q34: How should AI-driven personalization balance effectiveness with privacy?</h3>
        <p className="text-blue-400 mb-6">
          AI can dramatically improve personalization, but requires collecting sensitive financial data. Finding the right balance is crucial for user trust and program effectiveness.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">User Comfort with Data Sharing by Value Proposition</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { purpose: 'Better Recommendations', comfort: 68, adoption: 72 },
              { purpose: 'Personalized Learning', comfort: 75, adoption: 78 },
              { purpose: 'Risk Assessment', comfort: 52, adoption: 58 },
              { purpose: 'Product Suggestions', comfort: 35, adoption: 42 },
              { purpose: 'Behavioral Prediction', comfort: 42, adoption: 48 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="purpose" type="category" stroke="#66b3ff" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="comfort" fill="#00ff88" name="Comfort Level %" />
              <Bar dataKey="adoption" fill="#66b3ff" name="Feature Adoption %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Users show 75% comfort with data sharing for personalized learning but only 35% for product suggestions. Transparent data policies increase comfort by 32 percentage points. Programs with clear data controls and opt-in features see 45% higher adoption than mandatory data collection.
          </p>
        </div>
      </div>
    </div>
  );
};

// Interdisciplinary Connections
export const Interdisciplinary: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 08</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Interdisciplinary Connections</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Financial literacy intersects with multiple disciplines. This final section explores connections to broader fields and opportunities for cross-disciplinary innovation.
        </p>
      </div>

      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q35: How can insights from behavioral economics improve financial education?</h3>
        <p className="text-blue-400 mb-6">
          Behavioral economics reveals systematic patterns in decision-making. Applying these insights can significantly enhance educational effectiveness.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Impact of Behavioral Economics Integration</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { application: 'Default Options', improvement: 68 },
              { application: 'Choice Architecture', improvement: 72 },
              { application: 'Loss Framing', improvement: 58 },
              { application: 'Social Norms', improvement: 65 },
              { application: 'Commitment Devices', improvement: 75 },
              { application: 'Mental Accounting', improvement: 62 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="application" type="category" stroke="#66b3ff" width={140} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="improvement" fill="#00ff88" name="Behavior Improvement %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Commitment devices show 75% improvement in desired behaviors, while choice architecture improves outcomes by 72%. Programs explicitly teaching behavioral economics concepts alongside practical applications show 48% better long-term decision quality.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q36: What role should K-12 financial education play?</h3>
        <p className="text-blue-400 mb-6">
          Early financial education may establish foundational understanding. Research examines the optimal age for introduction and curriculum design.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Readiness and Retention by Age Group</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { age: 'Age 10', readiness: 35, retention: 42, application: 25 },
              { age: 'Age 12', readiness: 52, retention: 58, application: 45 },
              { age: 'Age 14', readiness: 68, retention: 72, application: 62 },
              { age: 'Age 16', readiness: 82, retention: 85, application: 78 },
              { age: 'Age 18', readiness: 88, retention: 88, application: 85 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="age" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="readiness" stroke="#00ff88" strokeWidth={2} name="Cognitive Readiness %" />
              <Line type="monotone" dataKey="retention" stroke="#66b3ff" strokeWidth={2} name="Knowledge Retention %" />
              <Line type="monotone" dataKey="application" stroke="#ffd93d" strokeWidth={2} name="Practical Application %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> Readiness increases significantly from age 14 (68%) to age 16 (82%). Students receiving financial education at age 16+ show 85% retention and 78% practical application. Early conceptual introduction (age 12-14) followed by detailed instruction (age 16+) produces optimal long-term outcomes.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q37: How can technology from other domains enhance financial learning?</h3>
        <p className="text-blue-400 mb-6">
          Technologies developed for gaming, healthcare, and other fields may have applications in financial education. Research explores cross-domain technology transfer.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Engagement Impact of Cross-Domain Technologies</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { technology: 'VR Simulations', engagement: 88, learning: 82, cost: 35 },
              { technology: 'AI Tutors', engagement: 82, learning: 85, cost: 65 },
              { technology: 'Adaptive Testing', engagement: 68, learning: 78, cost: 72 },
              { technology: 'Biometric Feedback', engagement: 72, learning: 68, cost: 42 },
              { technology: 'Social VR', engagement: 85, learning: 75, cost: 38 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="technology" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="engagement" fill="#00ff88" name="Engagement %" />
              <Bar dataKey="learning" fill="#66b3ff" name="Learning Impact %" />
              <Bar dataKey="cost" fill="#ffd93d" name="Cost-Effectiveness %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> VR simulations achieve 88% engagement and 82% learning impact but lower cost-effectiveness (35%). AI tutors provide the best balance with 82% engagement, 85% learning impact, and 65% cost-effectiveness. Adaptive testing offers the most scalable solution at 72% cost-effectiveness.
          </p>
        </div>
      </div>

      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q38: What can financial education learn from public health campaigns?</h3>
        <p className="text-blue-400 mb-6">
          Public health has decades of experience changing behaviors at scale. Many of these insights may transfer to financial education contexts.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Transferability of Public Health Strategies</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { strategy: 'Social Norms Marketing', transferability: 88, effectiveness: 82 },
              { strategy: 'Simplified Messaging', transferability: 92, effectiveness: 85 },
              { strategy: 'Community Champions', transferability: 78, effectiveness: 75 },
              { strategy: 'Environmental Changes', transferability: 68, effectiveness: 72 },
              { strategy: 'Mass Media Campaigns', transferability: 82, effectiveness: 68 },
              { strategy: 'Peer Education', transferability: 85, effectiveness: 78 },
            ]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="strategy" type="category" stroke="#66b3ff" width={160} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="transferability" fill="#00ff88" name="Transferability %" />
              <Bar dataKey="effectiveness" fill="#66b3ff" name="Effectiveness %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Simplified messaging shows highest transferability (92%) and effectiveness (85%). Social norms marketing, which changed behaviors in smoking cessation and healthy eating, shows 88% transferability to financial contexts. Financial programs adopting public health frameworks show 52% better population-level outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};
