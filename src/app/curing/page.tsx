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

      {/* 3. Industrial Applications Section */}
      <section className={styles.applicationsSection}>
        <div className="container">
          <div className={styles.bannerGrid}>
            <div className={styles.bannerText}>
              <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Construction Curing</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
                Concrete Curing on Construction Sites
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                Ashok Enterprises provides high-density, raw jute sheets specially woven for building construction projects. 
                Wrapping concrete pillars, columns, and slabs with wet jute sacking sheets (Hessian bags) prevents the water from evaporating too quickly during the critical curing phase.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                By maintaining continuous dampness, our premium jute wraps ensure concrete achieves maximum compressive strength, durability, and crack resistance.
              </p>
            </div>
            <div className={styles.appImageContainer}>
              <img
                src="/jute_concrete_curing.png"
                alt="Wet Jute Sheets Concrete Curing on Site"
                className={styles.appImage}
              />
            </div>
          </div>

          <div className={styles.bannerGrid} style={{ marginTop: "64px", direction: "rtl" }}>
            <div className={styles.bannerText} style={{ direction: "ltr" }}>
              <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Twine & Ropes</span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--primary)", marginBottom: "16px" }}>
                Strong Biodegradable Ropes & Twines
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                Jute fibers are twisted and spun into multiple plies to create highly reliable, eco-friendly ropes (known locally as "rasan" or "rassa"). 
                These are extensively used for bundling agricultural crops, secure packaging, tying construction scaffolding, and creating artisanal crafts.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.65", opacity: 0.9 }}>
                Fully biodegradable and compostable, our ropes offer excellent knot-holding ability and high tensile strength without harming the environment.
              </p>
            </div>
            <div className={styles.appImageContainer}>
              <img
                src="/jute_rope_making.png"
                alt="Jute Rope Twist Spinning in Factory"
                className={styles.appImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Processing & Stitching Steps Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className="text-center" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className={styles.subtitle} style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase" }}>Jute Lifecycle</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", color: "var(--primary)", marginTop: "8px" }}>
              How It is Made & Stitched
            </h2>
            <p style={{ maxWidth: "600px", margin: "12px auto 0 auto", opacity: 0.8, fontSize: "0.95rem" }}>
              From biological retting to state-of-the-art weaving and industrial sewing, follow the journey of the golden fiber.
            </p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <img src="/jute_curing_process.png" alt="Retting and washing" className={styles.processImage} />
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>1</div>
                <h4>Retting & Stripping</h4>
              </div>
              <p>
                Harvested stalks are submerged in slow-flowing fresh water for 12 to 18 days (retting) to decompose the pectin gums. Fibers are then stripped off the woody core manually and thoroughly washed.
              </p>
            </div>

            <div className={styles.processCard}>
              <img src="/jute_rope_making.png" alt="Combing and spinning jute yarn" className={styles.processImage} />
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>2</div>
                <h4>Spinning & Weaving</h4>
              </div>
              <p>
                Sun-dried raw golden fibers are combed and spun into strong yarns. These yarns are either twisted into heavy-duty ropes and twines, or woven on power looms into high-density jute fabrics and sacking sheets.
              </p>
            </div>

            <div className={styles.processCard}>
              <img src="/jute_stitching.png" alt="Stitching and bag assembly" className={styles.processImage} />
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>3</div>
                <h4>Sewing & Stitching</h4>
              </div>
              <p>
                Woven jute sheets are cut and stitched using heavy-duty industrial sewing machines to create shopping bags, sacks, and custom wraps. Heavy-grade cotton thread ensures secure seams and high load-bearing limits.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
