---
title: 'BruCloud 2.0'
client: 'Brussels Airport Company'
summary: 'Design for an internal platform for Brussels Airport Cargo. The platform has multiple different use cases and applications.'
role: 'UI/UX Design, Frontend Development'
tags: [ 'Figma', 'UI Design', 'Development' ]
coverImage: '/src/assets/brucloud/mockup.png'
cardImage: '/src/assets/brucloud/mockup.png'
gallery: [ '/src/assets/brucloud/overview-m.png', '/src/assets/brucloud/overview-FAVV-m.png', '/src/assets/brucloud/overview-details-import-m.png', '/src/assets/brucloud/overview-details-export-m.png', '/src/assets/brucloud/overview-details-transfer-m.png', '/src/assets/brucloud/ima-docs-m.png', '/src/assets/brucloud/ima-goods-m.png', '/src/assets/brucloud/ima-new-goods-m.png', '/src/assets/brucloud/ima-new-goods-traces-m.png', '/src/assets/brucloud/ima-add-documents-m.png'  ]
order: 2
---

## Overview & Context

BruCloud 2.0 is a platform for Brussels Airport cargo, made up of several applications for the different parties that
handle a shipment: freight forwarders, who own the shipments, ground handling agents, who unload and load them, and
FAVV (the Federal Agency for the Safety of the Food Chain), who inspect perishable goods.
I designed two of these applications: a shipment overview of all import, export and transfer shipments on a given day,
and IMA (Inspection Management Application), used by freight forwarders and FAVV to manage inspections.

## Problem Space

Every party in the chain needs something different from the same shipment data. Ground handling agents need to see what
is arriving, forwarders need to manage and edit their shipments, and FAVV needs to know which goods require inspection,
where they are and when an inspector can reach them.
Inspections add another layer of complexity. Forwarders request them and supply documents, FAVV planners assign
inspectors, and inspectors record their findings and approve or reject. Each of these steps involves different people
and permissions, and all of them need one clear shared status.

## Solution

My role was to design and implement the interface for these applications, from the overview and shipment details to the inspection
flows for each role. Every type of user sees only what is relevant to them, so the platform stays clear for forwarders,
ground handlers and FAVV alike.
<br><br>
**A shipment overview that adapts to each role.**
The overview lists the day's shipments with filters, search and status badges that make it easy to scan. Forwarders can
create, edit and delete shipments, while ground handlers and FAVV get a read-only view.

<br>
<img src="/src/assets/brucloud/overview.png" alt="Shipment overview with filters and status badges">
<br>

**One place to follow an inspection from request to result.**
The shipment detail page brings together the shipment's status, goods and documents. From here forwarders request an
inspection, FAVV planners assign inspectors, and inspectors record their outcome.

<br>
<img src="/src/assets/brucloud/ima-docs.png" alt="Shipment details with inspection request">
<br>
<img src="/src/assets/brucloud/ima-goods.png" alt="Goods tab with per-product statuses">

## Impact

The designs defined the look and flow of the BruCloud 2.0 shipment overview and IMA, giving forwarders, ground handling
agents and FAVV a shared, role-aware way to follow shipments and inspections. They were delivered in sprint-sized pieces
and served as the basis for development.