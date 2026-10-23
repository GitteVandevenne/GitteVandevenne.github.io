---
title: 'Move a-head'
client: 'G-sport Vlaanderen'
summary: 'Design for an planning platform used by G-sport Vlaanderen to for their Move a-head sports day.'
role: 'UI/UX Design'
tags: [ 'Figma', 'UI Design', 'Prototyping' ]
coverImage: '/src/assets/move_a-head/mockup.png'
cardImage: '/src/assets/move_a-head/mockup.png'
gallery: [ '/src/assets/move_a-head/activiteit-toevoegen-m.png', '/src/assets/move_a-head/dagplanning-groep-m.png', '/src/assets/move_a-head/dagplanning-lesgever-m.png', '/src/assets/move_a-head/groep-toevoegen-m.png', '/src/assets/move_a-head/login-m.png', '/src/assets/move_a-head/overzicht-activiteiten-m.png', '/src/assets/move_a-head/overzicht-groepen-m.png', '/src/assets/move_a-head/planning-activiteiten-m.png', '/src/assets/move_a-head/planning-groepen-m.png', '/src/assets/move_a-head/registration-form-m.png', '/src/assets/move_a-head/groep-details-m.png' ]
order: 1
---

## Overview & Context

Move a-head is an annual sports day organized by G-sport Vlaanderen aimed at athletes with (mental) health challenges
and their support staff. The 2026 edition brought together roughly 50 groups and 500 participants across 28+ activities.

## Problem Space

G-sport Vlaanderen ran Move a-head entirely by hand: groups registered through a Google Form, and staff built the
full-day schedule manually in Excel.
Juggling activity capacity, walking distances between venues, and other constraints without any system to catch
conflicts.
The knowledge that made this work possible lived in people's heads, not in a tool.

## Solution

The Axxes trainees were tasked with creating a web application to replace that process: a registration flow for
participating groups,
an admin tool for managing groups and activities, and a scheduling system that respects the many real-world constraints
of the event,
like walking distances between venues, activity capacity, intensity levels, etc.
<br><br>

Working from a detailed feature brief, my role was translating the requirements, constraints, and feature scope into a
usable, coherent interface.
<br><br>
**A registration form that handles sensitive information carefully.**
Registering a group meant capturing organization details, headcounts, arrival and departure times, and sensitive fields.
I split the form into four labeled sections, Organization, Group details, Contact, Profile & characteristics, so it
reads as a series of short steps rather than one long questionnaire.

<br>
<img src="/src/assets/move_a-head/registration-form.png" alt="Group registration form">
<br>

**A planning view that surfaces conflicts at a glance.**
The brief defined hard constraints that make a schedule invalid outright (double-booked groups, over-capacity
sessions, ...) and soft constraints that should warn but not block (a requested lunch break, activity intensity
variety).
I designed the planning overview, so both types of issues are visually distinct and immediately visible, rather than
something an admin has to hunt for.

<br>
<img src="/src/assets/move_a-head/planning-groepen.png" alt="Activity and location planning overview">

## Impact

The design was used by the Axxes trainees to build an MVP for the application.