# @weblynk/templates

Pre-built page templates composed from @weblynk/blocks.

## Installation
npm install @weblynk/templates

## Requirements
- React 18+
- @weblynk/ui package
- @weblynk/blocks package

## Usage
import { TemplateRenderer, serviceBookingLanding } from '@weblynk/templates';

<TemplateRenderer config={serviceBookingLanding} />

## Available Templates
- serviceBookingLanding: Tours and activities
- hospitalityLanding: Hotels and resorts
- foodLanding: Restaurant with menu/reservations
- professionalLanding: Consulting services
- sharedLanding: Generic landing page

## Template Structure
Templates are JSON configurations defining sections and blocks.
