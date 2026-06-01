export type ProjectCategory =
  | "CFD Analysis"
  | "Aircraft Design"
  | "FEA Analysis"
  | "Thermal Engineering"
  | "Research";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  software: string[];
  domain: string;
  outcomes: string[];
  thumbnail: string;
  images: string[];
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "blended-wing-body-aircraft-design",
    title: "Blended Wing Body Aircraft Design",
    category: "Aircraft Design",
    shortDescription:
      "Full conceptual design of a 180-passenger BWB aircraft for 3000 nm range at Mach 0.8 cruise, compliant with FAR 25 certification standards.",
    fullDescription:
      "This project covers the complete design of a Blended Wing Body (BWB) aircraft aimed at operational efficiency, environmental friendliness, and compliance with industry standards. The aircraft is designed to transport 180 passengers over 3000 nautical miles, targeting medium to long-haul commercial flights. The cruising speed is Mach 0.8 at 42,000 ft altitude—comparable to modern subsonic commercial airliners. Stringent take-off and landing distance restrictions of 8,202 ft and 6,561 ft were enforced, ensuring compatibility with the vast majority of global airports. The aircraft also meets a 70 dB noise requirement in compliance with environmental standards. Full FAR 25 compliance ensures structural safety for commercial aviation. The BWB configuration improves aerodynamic efficiency by reducing drag, offering a more sustainable and cost-effective approach for the aviation industry.",
    software: ["CATIA", "SolidWorks", "MATLAB", "XFLR5"],
    domain: "Aeronautical Engineering / Aircraft Design",
    outcomes: [
      "180-passenger capacity with 3000 nm range at Mach 0.8",
      "Full FAR 25 certification compliance",
      "70 dB noise requirement satisfied",
      "Reduced drag via BWB aerodynamic configuration",
      "Improved fuel efficiency over conventional tube-and-wing designs",
    ],
    thumbnail: "/projects/project1/img-1.jpg",
    images: Array.from({ length: 8 }, (_, i) => `/projects/project1/img-${i + 1}.jpg`),
    featured: true,
    tags: ["BWB", "FAR 25", "Commercial Aviation", "Mach 0.8", "Aerodynamics"],
  },
  {
    id: 2,
    slug: "business-jet-airliner-design",
    title: "Business Jet Airliner Design",
    category: "Aircraft Design",
    shortDescription:
      "Conceptual design of a 10-passenger business jet for San Francisco–New York route (3000 nm), including CAD model, stability analysis, and drag polar.",
    fullDescription:
      "In this project, a business jet airliner for a trip from San Francisco to New York with a range of 3000 nm and 10 passengers was designed. Initial weight estimation was performed by considering similar category aircraft using Raymer's and Roskam's methods with MATLAB and XFLR5. All major aircraft components—wing, propulsion, fuselage, empennage, and landing gear—were designed according to mission requirements. Centre of gravity location was determined by calculating the weight of each component and its CG distance from a reference point. Stability analysis was performed in XFLR5. Drag polars for various flight phases were presented. A full 3D CAD model was produced in SolidWorks.",
    software: ["MATLAB", "XFLR5", "SolidWorks"],
    domain: "Aeronautical Engineering / Aircraft Design",
    outcomes: [
      "Complete conceptual design for 3000 nm / 10-pax business jet",
      "Weight estimation using Raymer & Roskam methods",
      "Stability analysis validated in XFLR5",
      "Drag polars presented for all flight phases",
      "Full 3D CAD model produced in SolidWorks",
    ],
    thumbnail: "/projects/project2/img-1.jpg",
    images: Array.from({ length: 5 }, (_, i) => `/projects/project2/img-${i + 1}.jpg`),
    featured: true,
    tags: ["Business Jet", "Stability Analysis", "Drag Polar", "CAD", "XFLR5"],
  },
  {
    id: 3,
    slug: "laminar-pipe-flow-cfd-analysis",
    title: "Laminar Pipe Flow CFD Analysis",
    category: "CFD Analysis",
    shortDescription:
      "ANSYS Fluent CFD simulation of internal laminar pipe flow—velocity profiles, skin friction coefficient, entry length, and pressure drop validated against analytical solutions.",
    fullDescription:
      "This project analyses laminar flow through a pipe using ANSYS Fluent. Laminar flow is characterised by fluid layers flowing parallel and streamlined with no disturbance between layers. In laminar pipe flow, velocity is maximum at the centreline and decreases toward the wall due to viscous effects. The study captures velocity profiles, skin friction coefficient, hydrodynamic entry length, and pressure drop. All CFD results are compared with analytical (theoretical) values to validate the simulation setup and mesh quality.",
    software: ["ANSYS Fluent"],
    domain: "Computational Fluid Dynamics / Fluid Mechanics",
    outcomes: [
      "Validated velocity profile: parabolic distribution confirmed",
      "Skin friction coefficient matched Darcy–Weisbach analytical solution",
      "Hydrodynamic entry length accurately predicted",
      "Pressure drop results within 2% of analytical values",
    ],
    thumbnail: "/projects/project3/img-1.jpg",
    images: Array.from({ length: 5 }, (_, i) => `/projects/project3/img-${i + 1}.jpg`),
    featured: false,
    tags: ["ANSYS Fluent", "Laminar Flow", "Pipe Flow", "Velocity Profile", "CFD Validation"],
  },
  {
    id: 4,
    slug: "gantry-system-structural-analysis",
    title: "Gantry System Structural Analysis",
    category: "FEA Analysis",
    shortDescription:
      "ANSYS Static Structural FEA of an industrial gantry system—stress distribution, deformation, and factor of safety evaluated under operational loading.",
    fullDescription:
      "Gantry systems are widely used in industrial settings for material handling, lifting, and transportation, making structural integrity critical for safety and efficiency. This project performs a full static structural analysis using ANSYS to evaluate stress distribution, deformation, and factor of safety under various loading conditions. The simulation workflow covers geometry import, meshing, boundary condition application, and post-processing. Key results include a maximum deformation of 0.0566 mm, maximum Von Mises stress of 11.206 MPa, and a minimum factor of safety of 15—confirming the structure remains well within elastic limits under the given load.",
    software: ["ANSYS Static Structural"],
    domain: "Structural Engineering / FEA",
    outcomes: [
      "Maximum deformation: 0.0566 mm (within acceptable limits)",
      "Maximum Von Mises stress: 11.206 MPa",
      "Minimum factor of safety: 15",
      "No yielding detected under given loading conditions",
      "Structural integrity confirmed for operational loads",
    ],
    thumbnail: "/projects/project4/img-1.jpg",
    images: Array.from({ length: 5 }, (_, i) => `/projects/project4/img-${i + 1}.jpg`),
    featured: false,
    tags: ["ANSYS", "FEA", "Von Mises", "Factor of Safety", "Structural Integrity"],
  },
  {
    id: 5,
    slug: "ramjet-cycle-thermodynamic-analysis",
    title: "Ramjet Cycle Thermodynamic Analysis",
    category: "Thermal Engineering",
    shortDescription:
      "PV and TS diagram analysis for ideal and real ramjet cycles at Mach 3, 80,000 ft altitude—component efficiencies and combustion parameters evaluated.",
    fullDescription:
      "This project develops PV and TS diagrams for both ideal and real ramjet cycles operating at 80,000 ft altitude with Mach 3 flight speed. The analysis uses a heat release of QR = 48,000 kJ/kg and a combustion temperature of Tcomb = 2,500 K. Component efficiencies are defined as: inlet pressure recovery (πd = 0.8), burner pressure ratio (πb = 0.9), and nozzle efficiency (πn = 0.9). The comparison between ideal and real cycles quantifies performance losses due to irreversibilities in diffusion, combustion, and expansion processes, providing insight into hypersonic propulsion thermodynamic performance.",
    software: ["MATLAB"],
    domain: "Thermal Engineering / Aerospace Propulsion",
    outcomes: [
      "PV and TS diagrams generated for ideal and real cycles",
      "Cycle performance degradation quantified from irreversibilities",
      "Component-level efficiency analysis at Mach 3 / 80,000 ft",
      "Combustion and expansion losses identified and compared",
    ],
    thumbnail: "/projects/project5/img-1.jpg",
    images: Array.from({ length: 4 }, (_, i) => `/projects/project5/img-${i + 1}.jpg`),
    featured: false,
    tags: ["Ramjet", "Thermodynamics", "Mach 3", "PV Diagram", "TS Diagram", "Propulsion"],
  },
  {
    id: 6,
    slug: "boeing-737-wingtip-devices-cfd",
    title: "CFD Analysis of Wingtip Devices — Boeing 737-300",
    category: "CFD Analysis",
    shortDescription:
      "ANSYS CFD study comparing seven wingtip configurations on Boeing 737-300 wing; blended 30° winglet achieved 19% L/D improvement and 4–6% fuel savings.",
    fullDescription:
      "This study investigates the aerodynamic performance of various wingtip designs for the Boeing 737-300 using CFD simulations in ANSYS. Analysis evaluates lift coefficient (Cl), drag coefficient (Cd), and lift-to-drag ratio (L/D) across AoA from 0° to 9°. Wing geometry for all configurations was modelled in SolidWorks and simulated at 35,000 ft cruise altitude. Among tested configurations, the blended 30° winglet achieved the highest aerodynamic efficiency: L/D of 13.94 at 6° AoA—a 19% improvement over the baseline (11.17 L/D). The blended 45° and 60° winglets followed closely at 18.8% and 17% improvements respectively. Wingtip sails, wing grid, and Hoerner winglets showed lower efficiency near baseline. The blended 30° winglet yields 4–6% fuel savings, equivalent to 360 tonnes of fuel and 1,137 tonnes of CO₂ annually under assumed operating conditions.",
    software: ["ANSYS Fluent", "ANSYS CFX", "SolidWorks"],
    domain: "Computational Fluid Dynamics / Aeronautical Engineering",
    outcomes: [
      "Blended 30° winglet: best L/D of 13.94 at 6° AoA (+19% over baseline)",
      "4–6% fuel savings → ~360 tonnes fuel reduction per aircraft annually",
      "CO₂ emission reduction of ~1,137 tonnes per aircraft per year",
      "Seven wingtip configurations systematically compared",
      "Full CFD-validated aerodynamic database at cruise conditions",
    ],
    thumbnail: "/projects/project6/img-1.jpg",
    images: Array.from({ length: 7 }, (_, i) => `/projects/project6/img-${i + 1}.jpg`),
    featured: true,
    tags: ["Winglet", "Boeing 737", "CFD", "L/D Ratio", "Fuel Efficiency", "ANSYS"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "CFD Analysis",
  "Aircraft Design",
  "FEA Analysis",
  "Thermal Engineering",
  "Research",
];
