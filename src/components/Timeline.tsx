'use client';

import { useRef, useState } from 'react';
import { TimelineItem, workExperience, educationExperience, legendItems } from '@/data/timeline';

const MIN_YEAR = 2003;
const MAX_YEAR = 2027;
const RANGE = MAX_YEAR - MIN_YEAR;

const WORK_ROW_H = 28;
const WORK_ROW_GAP = 8;
const EDU_ROW_H = 22;
const EDU_ROW_GAP = 6;
const AXIS_HEIGHT = 52;

function assignRows(items: TimelineItem[]): { items: TimelineItem[]; rowCount: number } {
    const sorted = [...items].sort((a, b) => a.start - b.start);
    const ends: number[] = [];

    const itemsWithRows = sorted.map(item => {
        let row = 0;
        while (row < ends.length && ends[row] > item.start + 0.05) row++;
        ends[row] = item.end;
        return { ...item, row };
    });

    const rowCount = itemsWithRows.length > 0
        ? Math.max(...itemsWithRows.map(i => (i as TimelineItem & { row: number }).row)) + 1
        : 0;

    return { items: itemsWithRows, rowCount };
}

function pct(year: number): number {
    return ((year - MIN_YEAR) / RANGE) * 100;
}

interface TooltipData {
    item: TimelineItem & { row: number };
    isWork: boolean;
    x: number;
    y: number;
}

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tooltip, setTooltip] = useState<TooltipData | null>(null);

    const work = assignRows(workExperience);
    const edu = assignRows(educationExperience);

    const workHeight = work.rowCount * (WORK_ROW_H + WORK_ROW_GAP) + 32;
    const eduHeight = edu.rowCount * (EDU_ROW_H + EDU_ROW_GAP) + 32;
    const totalHeight = workHeight + AXIS_HEIGHT + eduHeight;
    const axisTop = workHeight + AXIS_HEIGHT / 2;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!tooltip) return;
        let x = e.clientX + 16;
        let y = e.clientY - 70;
        if (x + 250 > window.innerWidth) x = e.clientX - 262;
        if (y < 8) y = e.clientY + 16;
        setTooltip(prev => prev ? { ...prev, x, y } : null);
    };

    // Generate year ticks
    const yearTicks = [];
    for (let y = MIN_YEAR; y <= MAX_YEAR; y++) {
        const p = pct(y);
        const major = (y % 4 === 3 || y === MIN_YEAR || y === MAX_YEAR);
        yearTicks.push({ year: y, pct: p, major });
    }

    const nowPct = pct(2026);

    return (
        <section id="historia" style={{ background: 'var(--ink)' }}>
            <div className="container">
                <div className="section-label">Trayectoria</div>
                <h2 className="section-title">Línea de <span>Tiempo</span></h2>
                <p className="section-subtitle">
                    2003 — 2027. Posicioná el mouse sobre cada bloque para ver los detalles.
                </p>

                {/* Legend */}
                <div className="tl-legend">
                    {legendItems.map((item, i) => (
                        <div key={i} className="tl-leg-item">
                            <div
                                className="tl-leg-swatch"
                                style={item.type === 'solid'
                                    ? { background: item.color }
                                    : { border: `1.5px solid ${item.color}`, background: `${item.color}1F` }
                                }
                            />
                            {item.label}
                        </div>
                    ))}
                </div>

                {/* Timeline Canvas */}
                <div className="tl-outer">
                    <div
                        ref={containerRef}
                        className="tl-inner"
                        style={{ height: totalHeight }}
                        onMouseMove={handleMouseMove}
                    >
                        {/* Section labels */}
                        <div style={{
                            position: 'absolute', right: 0, top: 6,
                            fontFamily: '"JetBrains Mono", monospace', fontSize: '.5rem',
                            color: 'rgba(122,219,214,.45)', letterSpacing: '.12em',
                            textTransform: 'uppercase', userSelect: 'none'
                        }}>
                            EXPERIENCIA LABORAL ↑
                        </div>
                        <div style={{
                            position: 'absolute', right: 0, top: workHeight + AXIS_HEIGHT + 4,
                            fontFamily: '"JetBrains Mono", monospace', fontSize: '.5rem',
                            color: 'rgba(158,184,196,.45)', letterSpacing: '.12em',
                            textTransform: 'uppercase', userSelect: 'none'
                        }}>
                            FORMACIÓN ↓
                        </div>

                        {/* Axis line */}
                        <div style={{
                            position: 'absolute', top: axisTop, left: 0, right: 0,
                            height: 1, background: 'rgba(94,122,138,.28)'
                        }} />

                        {/* Year ticks */}
                        {yearTicks.map(({ year, pct: p, major }) => (
                            <div key={`tick-${year}`}>
                                <div style={{
                                    position: 'absolute',
                                    left: `${p}%`,
                                    top: axisTop - (major ? 8 : 3),
                                    width: 1,
                                    height: major ? 16 : 6,
                                    background: `rgba(94,122,138,${major ? '.5' : '.2'})`,
                                    transform: 'translateX(-.5px)'
                                }} />
                                {major && (
                                    <div style={{
                                        position: 'absolute',
                                        left: `${p}%`,
                                        top: axisTop + 11,
                                        fontFamily: '"JetBrains Mono", monospace',
                                        fontSize: '.52rem',
                                        color: '#5E7A8A',
                                        transform: 'translateX(-50%)',
                                        letterSpacing: '.05em',
                                        userSelect: 'none',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {year}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* "Hoy" marker */}
                        <div style={{
                            position: 'absolute', left: `${nowPct}%`, top: workHeight,
                            width: 1, height: AXIS_HEIGHT,
                            background: 'linear-gradient(180deg,rgba(26,191,191,.05) 0%,rgba(26,191,191,.55) 50%,rgba(26,191,191,.05) 100%)'
                        }} />
                        <div style={{
                            position: 'absolute', left: `${nowPct}%`, top: workHeight - 20,
                            fontFamily: '"JetBrains Mono", monospace', fontSize: '.5rem',
                            color: '#1ABFBF', transform: 'translateX(-50%)',
                            letterSpacing: '.1em', whiteSpace: 'nowrap', textTransform: 'uppercase'
                        }}>
                            ▼ HOY
                        </div>

                        {/* Row separators */}
                        {Array.from({ length: work.rowCount - 1 }, (_, r) => (
                            <div key={`sep-${r}`} style={{
                                position: 'absolute', left: 0, right: 0,
                                top: workHeight - (r + 1) * (WORK_ROW_H + WORK_ROW_GAP) + WORK_ROW_GAP / 2 + 12,
                                height: 1, background: 'rgba(94,122,138,.07)'
                            }} />
                        ))}

                        {/* Work blocks */}
                        {(work.items as (TimelineItem & { row: number })[]).map((item, i) => {
                            const lp = pct(item.start);
                            const wp = ((item.end - item.start) / RANGE) * 100;
                            const tp = workHeight - (item.row + 1) * (WORK_ROW_H + WORK_ROW_GAP) + 12;

                            return (
                                <div
                                    key={`w-${i}`}
                                    className="tl-block"
                                    style={{
                                        left: `${lp}%`,
                                        width: `calc(${wp}% - 2px)`,
                                        top: tp,
                                        height: WORK_ROW_H,
                                        background: item.color,
                                        boxShadow: `0 2px 12px ${item.color}40`,
                                        opacity: tooltip?.item === item ? 1 : 0.82,
                                        filter: tooltip?.item === item ? 'brightness(1.2)' : undefined,
                                        borderRadius: 14,
                                        zIndex: tooltip?.item === item ? 20 : 5 - item.row,
                                        minWidth: 4,
                                    }}
                                    onMouseEnter={(e) => setTooltip({
                                        item, isWork: true,
                                        x: e.clientX + 16, y: e.clientY - 70
                                    })}
                                    onMouseLeave={() => setTooltip(null)}
                                />
                            );
                        })}

                        {/* Education blocks */}
                        {(edu.items as (TimelineItem & { row: number })[]).map((item, i) => {
                            const lp = pct(item.start);
                            const wp = ((item.end - item.start) / RANGE) * 100;
                            const tp = workHeight + AXIS_HEIGHT + item.row * (EDU_ROW_H + EDU_ROW_GAP) + 12;

                            return (
                                <div
                                    key={`e-${i}`}
                                    className="tl-block"
                                    style={{
                                        left: `${lp}%`,
                                        width: `calc(${wp}% - 2px)`,
                                        top: tp,
                                        height: EDU_ROW_H,
                                        background: `rgba(42,189,212,.07)`,
                                        border: `1.5px solid ${item.color}`,
                                        opacity: tooltip?.item === item ? 1 : 0.72,
                                        filter: tooltip?.item === item ? 'brightness(1.2)' : undefined,
                                        borderRadius: 10,
                                        zIndex: tooltip?.item === item ? 20 : 3 - item.row,
                                        minWidth: 4,
                                    }}
                                    onMouseEnter={(e) => setTooltip({
                                        item, isWork: false,
                                        x: e.clientX + 16, y: e.clientY - 70
                                    })}
                                    onMouseLeave={() => setTooltip(null)}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="info-box" style={{ marginTop: '1.5rem' }}>
                    <p>
                        <strong>18 años de experiencia en IT:</strong> De trainee en 2GSoft hasta Fractional CTO
                        con IA en LATAM. La cordillera no se construye en un día, los sistemas que escalan tampoco.
                    </p>
                </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
                <div className="tl-tooltip" style={{
                    opacity: 1,
                    left: tooltip.x,
                    top: tooltip.y,
                }}>
                    <div style={{
                        fontFamily: '"JetBrains Mono", monospace', fontSize: '.57rem',
                        color: tooltip.item.color, letterSpacing: '.1em',
                        textTransform: 'uppercase', marginBottom: '.4rem'
                    }}>
                        {Math.trunc(tooltip.item.start)} — {Math.trunc(tooltip.item.end)} &nbsp;·&nbsp;
                        {Math.round(tooltip.item.end - tooltip.item.start)} año{Math.round(tooltip.item.end - tooltip.item.start) !== 1 ? 's' : ''}
                    </div>
                    <div style={{
                        fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
                        fontSize: '.9rem', color: '#F2EDE8', marginBottom: '.25rem', lineHeight: 1.3
                    }}>
                        {tooltip.item.title}
                    </div>
                    <div style={{
                        fontSize: '.75rem', color: '#8E9A9E',
                        fontFamily: '"Space Grotesk", sans-serif'
                    }}>
                        {tooltip.item.company}
                    </div>
                    {tooltip.isWork && tooltip.item.category && (
                        <div style={{
                            fontFamily: '"JetBrains Mono", monospace', fontSize: '.52rem',
                            color: tooltip.item.color, opacity: .65, marginTop: '.38rem',
                            letterSpacing: '.08em'
                        }}>
                            {tooltip.item.category}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
