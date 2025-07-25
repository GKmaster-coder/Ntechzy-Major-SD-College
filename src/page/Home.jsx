import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import AboutSection from '../components/home/AboutSection'
import VideoSection from '../components/home/VideoSection'
import StatsSection from '../components/home/StatsSection'
import CollegeAffliliation from '../components/home/CollegeAffiliationMarquee'
import AchievementsSection from '../components/home/AchievementSection'
import CardHoverEffect from '../components/home/CardHoverEffectDemo'
import TestimonialsVideos from '../components/home/VideoTestimonials'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <CardHoverEffect />
      <AchievementsSection />
      <VideoSection />
      <TestimonialsVideos />
      <CollegeAffliliation />
    </>
  )
}

export default Home
