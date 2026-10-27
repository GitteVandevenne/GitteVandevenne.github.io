---
title: 'Checkin@work'
client: 'Deuse'
summary: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'
role: 'UI/UX Design, Frontend Development'
tags: [ 'Figma', 'UI Design', 'Prototyping', 'development' ]
coverImage:  '/assets/checkin-at-work/mockup.svg'
cardImage: '/assets/checkin-at-work/mockup.png'
gallery: [ '/assets/checkin-at-work/login-m.png', '/assets/checkin-at-work/week-m.png', '/assets/checkin-at-work/month-m.png', '/assets/checkin-at-work/details-m.png',  '/assets/checkin-at-work/qr-m.png', '/assets/checkin-at-work/scan-qr-m.png', '/assets/checkin-at-work/scan-succes-m.png' ]
order: 3
---

## Overview & Context

For my thesis, I designed and built a mobile app that digitalizes time registration for construction workers. The
project was made together with Deuse, a software company that builds custom digital tools for other companies, and was
set in a fictional construction company.
The app is build for compliance with the Belgian Checkinatwork system, which requires workers on large construction
sites to be registered every day before they start working.

## Problem Space

Many construction companies still keep track of working hours by hand, which is slow, easy to get wrong and makes it
hard to prove compliance with Checkinatwork. Registration has to happen daily and at the moment someone starts work, so
any extra friction for the worker or the employer adds up quickly.
The app had to work for two very different users: employees checking in for a shift, and employers confirming that
check-in. Both are often on a building site, on a phone, and in a hurry, so the interface had to be clear at a glance
and needs as few steps as possible.

## Solution

I designed an MVP of the app in Figma and implemented it in Flutter. Employees log in and see their shifts in a week or
month calendar, open a shift for its details, and generate a QR code to check in. Employers log in and scan that code,
which
registers the employee's time.
<br<br>
I created three complete design directions for all six screens:one with a construction photo background, one with
flowing shapes and one with a brick pattern. All three used yellow or red, inspired by construction hats and bricks. The
client chose the frist one, since it was liked the most and was equally easy to build. The brick design looked too
cluttered behind the text, which is why I didn't pick it myself either.

<br>
<img src="/assets/checkin-at-work/designs.png" alt="Three design directions for the app" class="w-full max-w-3xl mx-auto">
<br>

**A calendar that stays readable with multiple shifts.**
My first design places shift details inside the calendar cells, which became cluttered when someone had more than one
shift in a day. I changed this so the calendar only marks a day with a circle and shows the shift details below it,
which keeps both the week and month views clean.

<br>
<img src="/assets/checkin-at-work/calendar.png" alt="Week and month calendar screens" class="w-full max-w-xl mx-auto">
<br>

**A checkin-flow that is hard to get wrong.**
The employee checks in with one button, which opens a QR code. The employer scans it and gets a clear confirmation. A
shift that has already been checked in shows its check-in time and a disabled button, and scanning the same code again
gives a clear message instead of overwriting the time.

<br>
<img src="/assets/checkin-at-work/shift-and-qr.png" alt="Shift screen, QR code and scanning screen" class="w-full max-w-3xl mx-auto">

## Impact

The result is a working app covering the full check-in flow, from login to calendar, shift details, QR generation and
scanning, built to be extended with a database and payroll integration. Because this was a thesis project, developed in
only 5 weeks, it was never used by a real client. It was a way for me to learn Flutter and to take an app from design to
implementation.