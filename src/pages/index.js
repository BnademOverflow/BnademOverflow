import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/LeaderCard';
import ModCard from '../components/ModCard';
import Mod_2_Card from '../components/Mod_2_Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/Leader-data';
import modData from '../data/Mod1-data';
import mod_2_Data from '../data/Mod2-data';
import HeroImage from '../components/svg/HeroImage';
import SvgCharts from '../components/svg/SvgCharts';
import Community from '../components/svg/Community';
import Testing from '../components/svg/Testing';
import Metadata from '../components/metadata';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Index = () => (
  <Layout>
    <Metadata title="Home" description="Community with genius people who love to be beside the computer and understand how its works." image="https://raw.githubusercontent.com/BnademOverflow/BnademOverflow-Community/main/assets/background.png" />
    <section className="pt-20 md:pt-40">
      <div className="container px-8 mx-auto lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            BnademOverFlow
          </h1>
          <p className="mt-6 text-xl font-light lg:text-2xl">
            Community with genius people who love to be beside the computer and understand how its
            works.
          </p>
          <p className="mt-8 md:mt-20">
            <a href="mailto:bnademoverflow@protonmail.com">
              <Button size="lg">Get Started</Button>
            </a>
          </p>
          <p className="mt-4 ml-4 text-gray-600">
            Join{' '}
            <a href="https://discord.gg/bnademoverflow" target="_blank">
              Discord
            </a>{' '}
            Server
          </p>
        </div>
        <div className="m-6  lg:w-1/2">
          <Community />
        </div>
      </div>
    </section>
    <section id="Community" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold lg:text-5xl">Community</h2>
        <div className="flex flex-col mt-12 sm:flex-row sm:-mx-3">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">We Believe...</p>
              <p className="mt-4">
                In a great community with genius people who love to be beside the computer and
                understand how its works.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">We are Into...</p>
              <p className="mt-4">
                A new challenges like creating Twil-Platform where we can write articles, make
                videos and live streams and make them accessible to the public.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="text-xl font-semibold">We Try...</p>
              <p className="mt-4">
                To be more open and share everything relates to programming & software engineering,
                CyberSecurity, Tech, and everything in between.
              </p>
              <br />
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="About"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">RamadanOverFlow</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            an event with a major of IT peoples focused mainly on Web development Frontend | Backend
            & Machine Learning & CyberSecurity who are going to talk in a live event about the
            latest technological advances and fascinating ideas.
          </p>
        </div>
      }
      secondarySlot={<HeroImage />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Support</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We Support all young developers by sharing their project and sharing all events relate
            to tech, be close to the informations is our work.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Experienced Developers and CyberSecurity Agent
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With A majority of famous Moroccan Developers and Big Tech Worker ex. Google, Spotify,
            IBM, Microsoft and most Talented people in Africa, we try to share resources to help
            junior people to get into the 0's and 1's world.
          </p>
        </div>
      }
      secondarySlot={<Testing />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Community Stat</LabelText>
        <div className="flex flex-col mt-8 sm:flex-row lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+1000" secondaryText="Facebook Members" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+400" secondaryText="Twitter Followers" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+800" secondaryText="Discord Members" />
          </div>
        </div>
      </div>
    </section>
    <section id="Leaders" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-center text-gray-600">Community Leaders</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <LabelText className="mb-8 text-center text-gray-600">Community Moderators</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {modData.map((mod) => (
            <div key={mod.modName} className="flex-1 px-3">
              <ModCard mod={mod} />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {mod_2_Data.map((mod_2) => (
            <div key={mod_2.mod_2_Name} className="flex-1 px-3">
              <Mod_2_Card mod_2={mod_2} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container py-24 mx-auto my-20 text-center bg-gray-200 rounded-lg shadow-2xl ">
      <h3 className="text-5xl font-semibold">Ready to grow With Us?</h3>
      <p className="mt-8 text-xl font-light">
        Join our OverFlows family and help us coding, fixing bugs, Testing and writing.
      </p>
      <p className="mt-8">
        <a href="https://discord.gg/bnademoverflow" target="_blank">
          <Button size="xl">Join Us</Button>
        </a>
      </p>
    </section>
  </Layout>
);

export default Index;
