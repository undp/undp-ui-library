import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import {
  FeatureShowcase,
  FeatureShowcaseCard,
  FeatureShowcaseIntro,
  FeatureShowcaseIntroBody,
  FeatureShowcaseIntroTitle,
  H3,
  P,
} from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof FeatureShowcase>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/Feature showcase',
  component: FeatureShowcase,
  tags: ['autodocs'],
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <FeatureShowcase {...args}>
          <FeatureShowcaseIntro>
            <FeatureShowcaseIntroTitle>Hello world</FeatureShowcaseIntroTitle>
            <FeatureShowcaseIntroBody>Lorem ipsum dolor sit amet</FeatureShowcaseIntroBody>
          </FeatureShowcaseIntro>
          <FeatureShowcaseCard
            sections={[
              {
                section: 'Featured Solutions',
                items: [
                  {
                    headerImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
                    stripColor: '#006EB5',
                    content: (
                      <>
                        <H3>Data Portal</H3>
                        <P>
                          Explore country-level development indicators through interactive
                          dashboards and visualizations.
                        </P>
                      </>
                    ),
                  },
                  {
                    headerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
                    stripColor: '#00A651',
                    content: (
                      <>
                        <H3>Knowledge Hub</H3>
                        <P>
                          Access publications, case studies, and resources from across the
                          organization.
                        </P>
                      </>
                    ),
                  },
                  {
                    headerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
                    content: (
                      <>
                        <H3>Analytics Platform</H3>
                        <P>Generate insights with advanced reporting and data exploration tools.</P>
                      </>
                    ),
                  },
                ],
              },
              {
                section: 'Success Stories',
                items: [
                  {
                    headerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
                    stripColor: '#D12800',
                    content: (
                      <>
                        <H3>Community Engagement</H3>
                        <P>Supporting local initiatives through collaborative digital platforms.</P>
                      </>
                    ),
                  },
                  {
                    headerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
                    stripColor: '#8256D0',
                    content: (
                      <>
                        <H3>Innovation Lab</H3>
                        <P>
                          Accelerating experimentation and innovation across development programs.
                        </P>
                      </>
                    ),
                  },
                ],
              },
              {
                section: 'Resources',
                items: [
                  {
                    headerImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
                    content: (
                      <>
                        <H3>Documentation</H3>
                        <P>Comprehensive guides, APIs, and implementation examples.</P>
                      </>
                    ),
                  },
                  {
                    headerImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
                    content: (
                      <>
                        <H3>Training Materials</H3>
                        <P>Workshops, tutorials, and learning resources for teams.</P>
                      </>
                    ),
                  },
                ],
              },
            ]}
          />
        </FeatureShowcase>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof FeatureShowcase>;

export const Default: Story = {};
