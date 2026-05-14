"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Team",          id: "#team"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Les Foodies"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Refined Culinary Experiences"
      description="Les Foodies curates bespoke dining moments that marry tradition with contemporary culinary artistry."
      testimonials={[
        {
          name: "Jean-Luc Dubois",          handle: "@jl_dubois",          testimonial: "A truly transcendent dining experience that redefined my perception of French fusion.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg?_wi=1"},
        {
          name: "Elena Martinez",          handle: "@elena_m",          testimonial: "Exceptional ingredients, flawless service, and an ambiance that captures the essence of luxury.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg?_wi=1"},
        {
          name: "Hiroshi Tanaka",          handle: "@htanaka",          testimonial: "The precision of the kitchen team is unparalleled. Every bite tells a story.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517418.jpg?_wi=1"},
        {
          name: "Sarah Jenkins",          handle: "@sarah_j",          testimonial: "Les Foodies provided the most memorable anniversary dinner. Perfectly curated.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-attractive-smiling-woman-retro-vintage-american-50s-cafe-sitting-table-drinking-milk-shake-cocktail-hipster-stylish_285396-10712.jpg?_wi=1"},
        {
          name: "Marco V.",          handle: "@marco_v",          testimonial: "Simply the best fine dining in the city, period.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-proposing-his-lover_23-2148060599.jpg?_wi=1"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-people-holding-drinks_23-2150124821.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/table-setting_74190-3618.jpg",          alt: "Diner 1"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-couple-having-lunch_23-2150598339.jpg",          alt: "Diner 2"},
        {
          src: "http://img.b2bpic.net/free-photo/event-hall-furniture-brown-white-colors_114579-2230.jpg",          alt: "Diner 3"},
        {
          src: "http://img.b2bpic.net/free-photo/flute-with-two-white-black-porcelain-plates-different-size-served-table-with-natural-fir-branch_132075-6157.jpg",          alt: "Diner 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-tender-parisian-girl-stylish-outfit-sends-air-kiss-portrait-young-woman-with-expressive-look_197531-12004.jpg",          alt: "Diner 5"},
      ]}
      avatarText="Join our community of 10,000+ satisfied gourmets."
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="A Legacy of Flavor"
      description="At Les Foodies, we believe every meal should be a narrative. Our journey began with a simple quest to source the finest, most sustainable ingredients, crafting them into dishes that honor the earth and delight the soul."
      bulletPoints={[
        {
          title: "Artisan Sourcing",          description: "Partnerships with local, ethical farmers."},
        {
          title: "Culinary Vision",          description: "Innovative techniques paired with heritage recipes."},
        {
          title: "Unrivaled Ambiance",          description: "Designed for intimacy, connection, and joy."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-chef-with-gloves-cooking-pasta-kitchen_23-2148763149.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Truffle Infused Risotto",          price: "€34",          imageSrc: "http://img.b2bpic.net/free-photo/pumpkin-soup-with-shrimp-glass-red-wine_140725-5413.jpg"},
        {
          id: "2",          name: "Pan-Seared Sea Bass",          price: "€42",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-radish-meal-with-meat-inside-white-plate-table-food-meal-dinner-restaurant_140725-28248.jpg"},
        {
          id: "3",          name: "Deconstructed Chocolate Ganache",          price: "€18",          imageSrc: "http://img.b2bpic.net/free-photo/cracker-cake-with-cranberries-top-inside-purple-plate-with-brownies_140725-29944.jpg"},
        {
          id: "4",          name: "Heritage Beet Salad",          price: "€22",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-detox-drink-arrangement_23-2148683596.jpg"},
        {
          id: "5",          name: "Roasted Quail",          price: "€38",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-frying-onions-with-pan-human-hand-stove_176474-3097.jpg"},
        {
          id: "6",          name: "Saffron Scallop Symphony",          price: "€45",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-dessert-presentation-plate_23-2151973717.jpg"},
      ]}
      title="Our Signature Creations"
      description="Explore a selection of our finest seasonal offerings."
    />
  </div>

  <div id="highlights" data-section="highlights">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "15+",          title: "Years of Excellence",          description: "Decades spent perfecting the art of dining.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-celebrating-with-wine_23-2149152936.jpg"},
        {
          id: "2",          value: "40+",          title: "Local Farmers",          description: "Direct partnerships for freshest quality.",          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-seasoning-salad_23-2148763187.jpg"},
        {
          id: "3",          value: "12",          title: "Industry Awards",          description: "Recognized by global critics.",          imageSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149728012.jpg"},
      ]}
      title="Gastronomy in Numbers"
      description="Evidence of our commitment to excellence."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "t1",          name: "Marcella V.",          role: "Executive Chef",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-cook-white-cook-suit-white-head-cap-posing_140725-15534.jpg"},
        {
          id: "t2",          name: "Julian S.",          role: "Sous Chef",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-kitchen_23-2149631733.jpg"},
        {
          id: "t3",          name: "Sophie L.",          role: "Pastry Chef",          imageSrc: "http://img.b2bpic.net/free-photo/baked-ham-food-photography-recipe-idea_53876-25020.jpg"},
      ]}
      title="The Culinary Artists"
      description="Meet the visionary team behind our signature menu."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Perfect Evening",          quote: "The best dining experience I've had in years.",          name: "Alex R.",          role: "Foodie",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg?_wi=2"},
        {
          id: "2",          title: "Exquisite",          quote: "Truly unique combinations and flavors.",          name: "Beth W.",          role: "Critic",          imageSrc: "http://img.b2bpic.net/free-photo/adorable-lovely-woman-fashion-clothes-is-sitting-open-air-cafe-is-using-smartphone-waiting-friends-city-lights-background_291650-842.jpg?_wi=2"},
        {
          id: "3",          title: "Outstanding",          quote: "A must-visit for any true food enthusiast.",          name: "Charlie D.",          role: "Local",          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517418.jpg?_wi=2"},
        {
          id: "4",          title: "Top Tier",          quote: "Impeccable service from start to finish.",          name: "Diana P.",          role: "Guest",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-attractive-smiling-woman-retro-vintage-american-50s-cafe-sitting-table-drinking-milk-shake-cocktail-hipster-stylish_285396-10712.jpg?_wi=2"},
        {
          id: "5",          title: "Simply Divine",          quote: "Flavors that linger long after the meal.",          name: "Edward M.",          role: "Guest",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-proposing-his-lover_23-2148060599.jpg?_wi=2"},
      ]}
      title="Guest Voices"
      description="Stories from those who have joined our table."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you accept reservations?",          content: "Yes, we encourage early bookings to secure your preferred dining time."},
        {
          id: "f2",          title: "Do you cater for dietary restrictions?",          content: "Our kitchen is happy to accommodate all allergies and dietary preferences with advance notice."},
        {
          id: "f3",          title: "Is the dress code formal?",          content: "We maintain a 'smart elegant' dress code to suit our atmosphere."},
      ]}
      title="Table Inquiries"
      description="Common questions regarding our reservations and dining philosophy."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      title="Book Your Experience"
      description="Secure your reservation or place a special order with us today."
      tag="Contact Us"
      imageSrc="http://img.b2bpic.net/free-photo/close-up-person-holding-tomatoes-with-dark-background_23-2148296926.jpg"
      mediaAnimation="slide-up"
      background={{ variant: "plain" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/top-view-people-holding-drinks_23-2150124821.jpg"
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Team",              href: "#team"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Use",              href: "#"},
          ],
        },
      ]}
      logoText="Les Foodies"
      copyrightText="© 2025 Les Foodies. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}