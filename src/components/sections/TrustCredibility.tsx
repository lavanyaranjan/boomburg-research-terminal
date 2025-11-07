import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

export const TrustCredibility: React.FC = () => {
  const trustFactors = [
    { factor: 'Academic Credentials', impact: 78 },
    { factor: 'Industry Experience', impact: 82 },
    { factor: 'Transparent Sources', impact: 85 },
    { factor: 'User Reviews', impact: 72 },
    { factor: 'Regulatory Approval', impact: 88 },
  ];

  const transparencyImpact = [
    { month: 'Month 1', highTransp: 68, medTransp: 52, lowTransp: 38 },
    { month: 'Month 2', highTransp: 72, medTransp: 55, lowTransp: 36 },
    { month: 'Month 3', highTransp: 78, medTransp: 58, lowTransp: 34 },
    { month: 'Month 4', highTransp: 82, medTransp: 60, lowTransp: 32 },
    { month: 'Month 5', highTransp: 85, medTransp: 62, lowTransp: 30 },
    { month: 'Month 6', highTransp: 88, medTransp: 63, lowTransp: 28 },
  ];

  const affiliationDisclosure = [
    { scenario: 'Full Disclosure', trust: 82, engagement: 78, conversion: 68 },
    { scenario: 'Partial Disclosure', trust: 58, engagement: 62, conversion: 52 },
    { scenario: 'No Disclosure', trust: 32, engagement: 45, conversion: 35 },
    { scenario: 'Hidden Affiliation', trust: 18, engagement: 28, conversion: 15 },
  ];

  const communityFeatures = [
    { feature: 'Peer Forums', adoption: 72, satisfaction: 68, retention: 75 },
    { feature: 'Expert Q&A', adoption: 85, satisfaction: 88, retention: 82 },
    { feature: 'Social Learning', adoption: 68, satisfaction: 72, retention: 70 },
    { feature: 'Progress Sharing', adoption: 52, satisfaction: 58, retention: 55 },
    { feature: 'Mentorship', adoption: 62, satisfaction: 85, retention: 88 },
  ];

  return (
    <div className="space-y-12">
      <div>
        <div className="text-sm text-accent uppercase tracking-widest mb-2">Section 03</div>
        <h2 className="text-4xl mb-4 text-[rgb(0,255,136)]">Trust, Credibility & Platform Design</h2>
        <p className="text-lg text-blue-400 max-w-3xl">
          Building and maintaining user trust is fundamental to educational effectiveness. This section examines factors that influence credibility perceptions, the role of transparency, and design elements that foster trust in financial education platforms.
        </p>
      </div>

      {/* Question 1 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q11: What factors most strongly influence perceived credibility?</h3>
        <p className="text-blue-400 mb-6">
          Users evaluate educational platforms based on multiple credibility signals. Understanding which factors have the strongest influence helps prioritize design and content decisions.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Trust Impact Scores by Credibility Factor</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trustFactors} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis type="number" stroke="#66b3ff" />
              <YAxis dataKey="factor" type="category" stroke="#66b3ff" width={150} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Bar dataKey="impact" fill="#00ff88" name="Trust Impact Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Regulatory approval and transparent sourcing are the strongest trust signals at 88% and 85% respectively. Platforms displaying regulatory credentials see 45% higher user retention and 38% higher course completion rates compared to those without clear credibility markers.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="border-l-4 border-accent pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q12: How does transparency about limitations affect user trust?</h3>
        <p className="text-blue-400 mb-6">
          Platforms that openly discuss their limitations and uncertainties may paradoxically build stronger trust. This research examines the relationship between transparency and long-term user confidence.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">User Trust Over Time by Transparency Level</h4>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={transparencyImpact}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="month" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Area type="monotone" dataKey="highTransp" stackId="1" stroke="#00ff88" fill="#00ff88" fillOpacity={0.6} name="High Transparency" />
              <Area type="monotone" dataKey="medTransp" stackId="2" stroke="#66b3ff" fill="#66b3ff" fillOpacity={0.6} name="Medium Transparency" />
              <Area type="monotone" dataKey="lowTransp" stackId="3" stroke="#ff6b6b" fill="#ff6b6b" fillOpacity={0.6} name="Low Transparency" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-accent/10 border border-accent/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-accent">Key Finding:</span> High transparency about limitations increases trust by 20 percentage points over 6 months, while low transparency shows declining trust. Users of transparent platforms report 52% higher confidence in applying learned concepts and are 40% more likely to recommend the platform.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="border-l-4 border-chart-3 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q13: What is the impact of affiliate relationship disclosure?</h3>
        <p className="text-blue-400 mb-6">
          Many financial education platforms have affiliate relationships with brokers or product providers. The manner and extent of disclosure significantly affects user trust and engagement.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Impact of Affiliation Disclosure on Key Metrics</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={affiliationDisclosure}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="scenario" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="trust" fill="#00ff88" name="Trust Score" />
              <Bar dataKey="engagement" fill="#66b3ff" name="Engagement %" />
              <Bar dataKey="conversion" fill="#ffd93d" name="Conversion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-3/10 border border-chart-3/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-3">Key Finding:</span> Full disclosure of affiliate relationships maintains 82% trust versus just 18% for hidden affiliations. When users discover undisclosed relationships, 75% report decreased trust and 68% discontinue platform use. Transparent disclosure reduces conversion by only 13% while maintaining long-term credibility.
          </p>
        </div>
      </div>

      {/* Question 4 */}
      <div className="border-l-4 border-chart-4 pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q14: How do community features affect platform trust and engagement?</h3>
        <p className="text-blue-400 mb-6">
          Social learning features like forums, peer interaction, and expert Q&A sessions can enhance trust through social proof and community validation.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">Community Feature Performance Metrics</h4>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={communityFeatures}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="feature" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Bar dataKey="adoption" fill="#00ff88" name="Feature Adoption %" />
              <Bar dataKey="satisfaction" fill="#66b3ff" name="User Satisfaction %" />
              <Bar dataKey="retention" fill="#ffd93d" name="Retention Impact %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-chart-4/10 border border-chart-4/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-chart-4">Key Finding:</span> Expert Q&A features achieve 85% adoption and 88% satisfaction, with the highest retention impact at 82%. Mentorship programs, while having lower adoption (62%), show exceptional satisfaction (85%) and retention (88%). Platforms with active community features see 55% higher 12-month retention rates.
          </p>
        </div>
      </div>

      {/* Question 5 */}
      <div className="border-l-4 border-primary pl-6">
        <h3 className="text-2xl mb-4 text-[rgb(196,196,196)]">Q15: What role does visual design play in credibility perception?</h3>
        <p className="text-blue-400 mb-6">
          Visual design elements communicate professionalism and competence. Research examines how design quality affects initial trust formation and ongoing engagement.
        </p>
        
        <div className="bg-card/50 p-6 rounded border border-border">
          <h4 className="mb-4">First Impression Trust by Design Quality</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { seconds: '0s', professional: 45, average: 32, poor: 18 },
              { seconds: '3s', professional: 62, average: 38, poor: 15 },
              { seconds: '10s', professional: 75, average: 42, poor: 12 },
              { seconds: '30s', professional: 82, average: 45, poor: 10 },
              { seconds: '60s', professional: 85, average: 48, poor: 8 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2332" />
              <XAxis dataKey="seconds" stroke="#66b3ff" />
              <YAxis stroke="#66b3ff" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f1419', border: '1px solid #1a2332' }}
                labelStyle={{ color: '#66b3ff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="professional" stroke="#00ff88" strokeWidth={2} name="Professional Design" />
              <Line type="monotone" dataKey="average" stroke="#66b3ff" strokeWidth={2} name="Average Design" />
              <Line type="monotone" dataKey="poor" stroke="#ff6b6b" strokeWidth={2} name="Poor Design" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded">
          <p className="text-sm text-blue-400">
            <span className="text-primary">Key Finding:</span> Professional visual design establishes 85% trust within 60 seconds versus just 8% for poor design. First impressions formed within 3 seconds predict 75% of long-term platform engagement. Users rate content as more credible when presented with professional design, even when content quality is identical.
          </p>
        </div>
      </div>
    </div>
  );
};
