"use client";

import React, { useState, useMemo } from "react";
import { Cpu } from "lucide-react";
import styles from "./curing.module.css";

export default function Curing() {
  // Simulator Parameters
  const [waterType, setWaterType] = useState<"slow" | "stagnant" | "fast">("slow");
  const [temperature, setTemperature] = useState<number>(30);
  const [density, setDensity] = useState<"low" | "medium" | "high">("medium");
  const [submersion, setSubmersion] = useState<"weighted" | "floating">("weighted");

  // Curing calculations
  const simulationResults = useMemo(() => {
    // 34°C is the perfect retting temperature.
    const baseDays = 14;
    
    // Temperature effect
    const tempDiff = 34 - temperature;
    const tempMult = 1 + (tempDiff * 0.05); // lower temp increases days, higher temp reduces
    
    // Water factor: slow flowing is perfect (1.0). Stagnant slows (bacteria builds up but water gets dirty/1.2). Fast washes away bacteria (1.6).
    const waterMult = waterType === "slow" ? 1.0 : waterType === "stagnant" ? 1.2 : 1.6;
    
    // Density: low density is faster (0.9), high density is slower due to lack of water flow in the bundle (1.3)
    const densityMult = density === "low" ? 0.9 : density === "medium" ? 1.0 : 1.35;
    
    // Submersion: weighted is fully submerged (1.0). floating is partially exposed, causing uneven slow retting (1.4)
    const submersionMult = submersion === "weighted" ? 1.0 : 1.45;

    let computedDays = Math.round(baseDays * tempMult * waterMult * densityMult * submersionMult);
    
    // Constraints
    if (computedDays < 6) computedDays = 6;
    if (computedDays > 45) computedDays = 45;

    // Quality determination
    let grade = "Grade B";
    let gradeClass = styles.gradeB;
    let description = "";

    if (temperature > 38 && waterType === "stagnant" && submersion === "floating") {
      grade = "Rotten (Failed)";
      gradeClass = styles.gradeFail;
      description = "Critical Failure. The water became highly acidic and stagnant at high temperatures, causing the cellulose to decompose. The fibers have rotted and are unusable.";
    } else if (computedDays >= 12 && computedDays <= 18 && waterType === "slow" && submersion === "weighted") {
      grade = "Grade A+ (Premium Golden)";
      gradeClass = styles.gradeA;
      description = "Exceptional quality! The fibers are long, silky, have a bright golden color with high tensile strength. High market value.";
    } else if (computedDays >= 10 && computedDays <= 20) {
      grade = "Grade A (High Quality)";
      gradeClass = styles.gradeA;
      description = "Very good quality fiber. Well-retted, easily extractable with solid strength and minimal barky roots. Ideal for premium carry bags and rugs.";
    } else if (computedDays > 20 && computedDays <= 28) {
      grade = "Grade B (Medium Fiber)";
      gradeClass = styles.gradeB;
      description = "Medium quality. The retting process took longer than usual, resulting in slightly dark fibers. Good for industrial packing twine and geotextiles.";
    } else if (computedDays > 28) {
      grade = "Grade C (Dark & Over-Retted)";
      gradeClass = styles.gradeC;
      description = "Over-retted fiber. Stems remained submerged too long, allowing bacteria to eat into the cellulose walls. Fibers are weak, dark grey, and prone to breaking.";
    } else {
      grade = "Grade C (Barky/Under-Retted)";
      gradeClass = styles.gradeC;
      description = "Under-retted fiber. Stems were taken out too early. The pectin gums did not dissolve fully, making stripping difficult and leaving coarse woody bark attached to the roots.";
    }

    return { days: computedDays, grade, gradeClass, description };
  }, [waterType, temperature, density, submersion]);

  return (
    <div className={`${styles.curingPage} animate-fade-in`}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.bannerGrid}>
            <div className={styles.bannerText}>
              <h1>Jute Curing Process</h1>
              <p>
                Learn how the golden fiber is biologically harvested through retting. Try our curing simulator below to see how parameters affect fiber quality.
              </p>
            </div>
            <div className={styles.bannerImageContainer}>
              <img
                src="/jute_concrete_curing.png"
                alt="Concrete Curing with Jute Sheets"
                className={styles.bannerImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulator" className="section-padding" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className={styles.layout}>
            {/* Controls */}
            <div className={styles.box}>
              <h2 className={styles.boxTitle}>
                <Cpu size={24} style={{ color: "var(--accent)" }} /> Curing Parameters
              </h2>

              <div className={styles.formGrid}>
                {/* Temperature slider */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <span>Water Temperature</span>
                    <span className={styles.sliderValue}>{temperature}°C</span>
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="42"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className={styles.slider}
                  />
                  <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Perfect biological range is 32°C - 35°C</span>
                </div>

                {/* Water Type selection */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>Water Flow Velocity</label>
                  <select
                    className={styles.select}
                    value={waterType}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setWaterType(e.target.value as "slow" | "stagnant" | "fast")}
                    aria-label="Water flow velocity selection"
                  >
                    <option value="slow">Slow Flowing Streams (Ideal - Refreshes oxygen)</option>
                    <option value="stagnant">Stagnant Ponds (Can make fiber greyish)</option>
                    <option value="fast">Fast Running River (Washes away retting bacteria)</option>
                  </select>
                </div>

                {/* Bundle density */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>Stem Bundle Density</label>
                  <select
                    className={styles.select}
                    value={density}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDensity(e.target.value as "low" | "medium" | "high")}
                    aria-label="Stem bundle density selection"
                  >
                    <option value="low">Low Density (Allows easy water penetration)</option>
                    <option value="medium">Medium Density (Standard bundle wrapping)</option>
                    <option value="high">High Density (Thick tight bundles, risk of uneven inner retting)</option>
                  </select>
                </div>

                {/* Submersion type */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>Submersion Method</label>
                  <select
                    className={styles.select}
                    value={submersion}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSubmersion(e.target.value as "weighted" | "floating")}
                    aria-label="Submersion method selection"
                  >
                    <option value="weighted">Fully Submerged (Weighted with logs/stones)</option>
                    <option value="floating">Partially Floating (Exposed to air, uneven dry layers)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Simulation output */}
            <div className={styles.box} style={{ justifyContent: "space-between" }}>
              <div className={styles.resultsContainer}>
                <div className={styles.resultsHeader}>
                  <div className={styles.daysBox}>
                    <span className={styles.daysVal}>{simulationResults.days} Days</span>
                    <span className={styles.daysLabel}>Retting Duration</span>
                  </div>
                  <span className={`${styles.gradeBadge} ${simulationResults.gradeClass}`}>
                    {simulationResults.grade}
                  </span>
                </div>
                <p className={styles.resultsDesc}>
                  {simulationResults.description}
                </p>
              </div>

              {/* Progress Timeline based on calculated days */}
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "16px", color: "var(--primary)" }}>
                  Curing Stage Timeline Progress
                </h3>
                <div className={styles.timeline}>
                  <div className={styles.timelineStep}>
                    <div className={`${styles.timelineDot} ${styles.timelineDotActive}`}>1</div>
                    <div className={styles.timelineInfo}>
                      <span className={styles.timelineTitle}>Day 1 - 3: Swelling & Absorption</span>
                      <p className={styles.timelineDesc}>Stem tissues absorb water, swelling up. Microorganisms start growing on stem nodes.</p>
                    </div>
                  </div>

                  <div className={styles.timelineStep}>
                    <div className={`${styles.timelineDot} ${simulationResults.days >= 8 ? styles.timelineDotActive : ""}`}>2</div>
                    <div className={styles.timelineInfo}>
                      <span className={styles.timelineTitle}>Day 4 - 9: Pectin Fermentation</span>
                      <p className={styles.timelineDesc}>Anaerobic bacteria break down soft tissues, dissolving the binding pectins and gums.</p>
                    </div>
                  </div>

                  <div className={styles.timelineStep}>
                    <div className={`${styles.timelineDot} ${simulationResults.days >= 12 ? styles.timelineDotActive : ""}`}>3</div>
                    <div className={styles.timelineInfo}>
                      <span className={styles.timelineTitle}>Day 10+: Fiber Loosening</span>
                      <p className={styles.timelineDesc}>Fibers fully disconnect from the woody inner core (stick) and are ready to be stripped.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
