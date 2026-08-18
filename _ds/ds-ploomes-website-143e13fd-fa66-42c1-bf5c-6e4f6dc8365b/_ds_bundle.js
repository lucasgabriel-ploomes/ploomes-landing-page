/* @ds-bundle: {"format":4,"namespace":"DesignSystem_143e13","components":[{"name":"Accordion","sourcePath":"components/Accordion/Accordion.jsx"},{"name":"AvatarBrand","sourcePath":"components/AvatarBrand/AvatarBrand.jsx"},{"name":"AvatarGroup","sourcePath":"components/AvatarBrand/AvatarBrand.jsx"},{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"ButtonBrand","sourcePath":"components/ButtonBrand/ButtonBrand.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"ClientLogo","sourcePath":"components/ClientLogos/ClientLogo.jsx"},{"name":"ClientLogos","sourcePath":"components/ClientLogos/ClientLogos.jsx"},{"name":"Eyebrow","sourcePath":"components/Eyebrow/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"MENU_MODULES","sourcePath":"components/MenuModule/MenuModule.jsx"},{"name":"MenuModule","sourcePath":"components/MenuModule/MenuModule.jsx"},{"name":"SidebarNav","sourcePath":"components/MenuModule/MenuModule.jsx"},{"name":"Stat","sourcePath":"components/Stat/Stat.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"}],"sourceHashes":{"components/Accordion/Accordion.jsx":"686d65b7fe43","components/AvatarBrand/AvatarBrand.jsx":"035b0b158258","components/Badge/Badge.jsx":"06807f307131","components/ButtonBrand/ButtonBrand.jsx":"dd713e7f5d11","components/Card/Card.jsx":"5e002669e69c","components/ClientLogos/ClientLogo.jsx":"86c67092f6c1","components/ClientLogos/ClientLogos.jsx":"648830d3a521","components/Eyebrow/Eyebrow.jsx":"3a3f3a037df3","components/Input/Input.jsx":"3eba3e8e55f0","components/MenuModule/MenuModule.jsx":"3f2b94b074ae","components/Stat/Stat.jsx":"d279c64f262d","components/Tabs/Tabs.jsx":"4311eac0f8c7","ui_kits/crm/analytics-view.jsx":"d9a5ba2296c5","ui_kits/crm/app.jsx":"652952baf926","ui_kits/crm/client-view.jsx":"3435a488ec82","ui_kits/crm/components.jsx":"e058f10c1136","ui_kits/crm/pipeline-view.jsx":"043ef61278e9","ui_kits/crm/shell.jsx":"2785e26989ea"},"inlinedExternals":[],"unexposedExports":[{"name":"clientLogoData","sourcePath":"components/ClientLogos/ClientLogos.jsx"},{"name":"clientLogoNames","sourcePath":"components/ClientLogos/ClientLogos.jsx"}]} */

(() => {

const __ds_ns = (window.DesignSystem_143e13 = window.DesignSystem_143e13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Accordion/Accordion.jsx
try { (() => {
/* global React */
// Ploomes — Accordion (FAQ). Chevron rotates; answer expands below a divider.

function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const has = prev.has(i);
    const next = new Set(allowMultiple ? prev : []);
    if (has) {
      if (allowMultiple) next.delete(i);
    } else next.add(i);
    return next;
  });
  return React.createElement("div", {
    style: {
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "20px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 17,
        color: "var(--fg-1)"
      }
    }, it.q, React.createElement("span", {
      style: {
        flexShrink: 0,
        color: "var(--ploomes-purple)",
        display: "inline-flex",
        transition: "transform 220ms var(--ease-out)",
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    }, React.createElement("svg", {
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, React.createElement("path", {
      d: "m6 9 6 6 6-6"
    })))), isOpen ? React.createElement("div", {
      style: {
        padding: "0 0 20px",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--fg-2)",
        maxWidth: 680
      }
    }, it.a) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Accordion/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/AvatarBrand/AvatarBrand.jsx
try { (() => {
/* global React */
// Ploomes — Avatar
// Circular avatar. Photo when `img` is set, else initials on a soft brand tint
// (ploo-brand-20 bg, ink-colored initials — per brand rules).

function AvatarBrand({
  size = 40,
  initials = "",
  img = null,
  color = "var(--ploo-brand-20)",
  fg = "var(--ploomes-ink)",
  ring = false,
  style
}) {
  const styleObj = {
    width: size,
    height: size,
    borderRadius: "50%",
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: Math.round(size * 0.38),
    letterSpacing: "-0.01em",
    color: fg,
    background: img ? "center/cover no-repeat url(" + img + "), " + color : color,
    boxShadow: ring ? "0 0 0 2px #fff, var(--shadow-sm)" : "none",
    overflow: "hidden",
    boxSizing: "border-box",
    ...style
  };
  return React.createElement("div", {
    style: styleObj
  }, img ? null : initials);
}
const Avatar = AvatarBrand;

// Overlapping avatar cluster (the "quem viu" stack on marketing tiles).
function AvatarGroup({
  items = [],
  size = 36,
  max = 4,
  overlap = 10
}) {
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  const children = shown.map((it, i) => React.createElement("div", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -overlap,
      position: "relative",
      zIndex: i
    }
  }, React.createElement(Avatar, {
    ...it,
    size,
    ring: true
  })));
  if (extra > 0) {
    children.push(React.createElement("div", {
      key: "more",
      style: {
        marginLeft: -overlap,
        position: "relative",
        zIndex: shown.length
      }
    }, React.createElement(Avatar, {
      size,
      initials: "+" + extra,
      color: "var(--neutral-100)",
      fg: "var(--fg-2)",
      ring: true
    })));
  }
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, children);
}
Object.assign(__ds_scope, { AvatarBrand, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/AvatarBrand/AvatarBrand.jsx", error: String((e && e.message) || e) }); }

// components/Badge/Badge.jsx
try { (() => {
/* global React */
// Ploomes — Badge
// Status pill / tag. Tones map to the Figma System + brand tokens. Manrope 600.

const PLM_BADGE_TONES = {
  purple: {
    soft: ["var(--ploo-brand-10)", "var(--ploomes-purple)"],
    solid: ["var(--ploomes-purple)", "#fff"],
    dot: "var(--ploomes-purple)"
  },
  success: {
    soft: ["var(--success-soft)", "var(--success)"],
    solid: ["var(--success)", "#fff"],
    dot: "var(--success)"
  },
  warning: {
    soft: ["var(--warning-soft)", "var(--warning-ink)"],
    solid: ["var(--warning)", "#fff"],
    dot: "var(--warning-ink)"
  },
  danger: {
    soft: ["var(--danger-soft)", "var(--danger)"],
    solid: ["var(--danger)", "#fff"],
    dot: "var(--danger)"
  },
  info: {
    soft: ["var(--info-soft)", "var(--info)"],
    solid: ["var(--info)", "#fff"],
    dot: "var(--info)"
  },
  neutral: {
    soft: ["var(--neutral-100)", "var(--neutral-600)"],
    solid: ["var(--neutral-600)", "#fff"],
    dot: "var(--neutral-500)"
  },
  whatsapp: {
    soft: ["var(--whatsapp-bg)", "var(--whatsapp-ink)"],
    solid: ["var(--whatsapp-ink)", "#fff"],
    dot: "var(--whatsapp-ink)"
  }
};
function Badge({
  children,
  tone = "purple",
  variant = "soft",
  size = "md",
  dot = false,
  icon = null,
  style
}) {
  const t = PLM_BADGE_TONES[tone] || PLM_BADGE_TONES.purple;
  const small = size === "sm";
  let bg, fg, boxShadow;
  if (variant === "solid") {
    [bg, fg] = t.solid;
  } else if (variant === "outline") {
    bg = "transparent";
    fg = t.soft[1];
    boxShadow = "inset 0 0 0 1px " + t.soft[1];
  } else {
    [bg, fg] = t.soft;
  }
  const styleObj = {
    display: "inline-flex",
    alignItems: "center",
    gap: small ? 5 : 6,
    padding: small ? "2px 8px" : "4px 12px",
    borderRadius: "var(--radius-pill)",
    background: bg,
    color: fg,
    boxShadow,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: small ? 11 : 12,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...style
  };
  const dotEl = dot ? React.createElement("span", {
    style: {
      width: small ? 6 : 7,
      height: small ? 6 : 7,
      borderRadius: "50%",
      background: variant === "solid" ? "currentColor" : t.dot,
      flexShrink: 0
    }
  }) : null;
  const iconEl = icon ? React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0
    }
  }, icon) : null;
  return React.createElement("span", {
    style: styleObj
  }, dotEl, iconEl, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/ButtonBrand/ButtonBrand.jsx
try { (() => {
/* global React */
// Ploomes — Button
// Website button. Specs measured from ploomes.com production, colors from the
// Figma Variable token system (primary = Purple Ploo #843CFF, radius 8px).

const PLM_BTN_SIZES = {
  sm: {
    fontSize: 13,
    padding: "8px 16px",
    gap: 6,
    radius: 8
  },
  md: {
    fontSize: 15,
    padding: "12px 24px",
    gap: 8,
    radius: 8
  },
  lg: {
    fontSize: 16,
    padding: "16px 32px",
    gap: 8,
    radius: 10
  },
  xl: {
    fontSize: 18,
    padding: "18px 40px",
    gap: 10,
    radius: 12
  }
};
function plmBtnVariant(variant, hover) {
  switch (variant) {
    case "secondary":
      return {
        background: hover ? "var(--ploo-brand-10)" : "transparent",
        color: "var(--ploomes-purple)",
        boxShadow: "inset 0 0 0 1.5px var(--ploomes-purple)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: hover ? "var(--ploomes-purple)" : "var(--ploomes-ink)"
      };
    case "dark":
      return {
        background: hover ? "var(--ploo-brand-80)" : "var(--ploomes-ink)",
        color: "#fff"
      };
    case "outline-white":
      return {
        background: hover ? "rgba(255,255,255,0.08)" : "transparent",
        color: "#fff",
        boxShadow: "inset 0 0 0 1.5px rgba(255,255,255," + (hover ? "1" : "0.5") + ")"
      };
    case "primary":
    default:
      return {
        background: hover ? "var(--ploomes-purple-deep)" : "var(--ploomes-purple)",
        color: "#fff",
        boxShadow: hover ? "0 6px 20px rgba(132,60,255,0.40)" : "0 2px 12px rgba(132,60,255,0.32)"
      };
  }
}
function ButtonBrand({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  href,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = PLM_BTN_SIZES[size] || PLM_BTN_SIZES.md;
  const styleObj = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: s.fontSize,
    lineHeight: 1.2,
    padding: s.padding,
    borderRadius: s.radius,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    opacity: disabled ? 0.5 : 1,
    transition: "background 140ms ease, box-shadow 140ms ease, transform 140ms ease",
    transform: press && !disabled ? "scale(0.98)" : "none",
    boxSizing: "border-box",
    ...plmBtnVariant(variant, hover && !disabled),
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onClick
  };
  if (href && !disabled) {
    return React.createElement("a", {
      href,
      style: styleObj,
      ...handlers
    }, iconLeft, children, iconRight);
  }
  return React.createElement("button", {
    type,
    disabled,
    style: styleObj,
    ...handlers
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { ButtonBrand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ButtonBrand/ButtonBrand.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
/* global React */
// Ploomes — Card
// Standard surface: white, 16px radius, soft ink-tinted shadow, brand-tint border.

const PLM_SHADOWS = {
  none: "none",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)"
};
function Card({
  children,
  padding = 24,
  radius = "var(--radius-lg)",
  shadow = "md",
  border = true,
  interactive = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const styleObj = {
    background: "var(--bg-surface)",
    borderRadius: radius,
    border: border ? "1px solid var(--border)" : "none",
    boxShadow: interactive && hover ? "var(--shadow-lg)" : PLM_SHADOWS[shadow] || PLM_SHADOWS.md,
    padding: typeof padding === "number" ? padding + "px" : padding,
    transition: "box-shadow 220ms var(--ease-out), transform 220ms var(--ease-out)",
    transform: interactive && hover ? "translateY(-3px)" : "none",
    cursor: interactive || onClick ? "pointer" : "default",
    boxSizing: "border-box",
    ...style
  };
  const handlers = interactive || onClick ? {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  } : {};
  return React.createElement("div", {
    style: styleObj,
    ...handlers
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/ClientLogos/ClientLogos.jsx
try { (() => {
// Ploomes client logos — companies that use Ploomes CRM (customer / "trusted by" wall).
// Self-contained: every logo is embedded as a data URI, so this renders in any
// consumer with no asset copying or path configuration required.

const clientLogoData = {
  "philips": {
    label: "Philips",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE5IiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTE5IDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTEuMjcyNCA4LjMwMzk5QzExLjI3MjQgMTAuODc1NyAxMC4wNDY3IDEyLjYxNzQgNi45NDI1IDEyLjYxNzRINS45NjE2MlY0LjQyNzIyQzYuMzEwMzIgNC40MDcyMyA2LjYzNTk5IDQuNDA3MjMgNi45NDI1IDQuNDA3MjNDOS44ODE4NCA0LjQwNjk0IDExLjI3MjQgNS44MTY1NyAxMS4yNzI0IDguMzAzOTlaTTguMDg2MDcgMTYuMTgzNEMxMy42NDA0IDE2LjE4MzQgMTcuMTUyMiAxMy4yOCAxNy4xNTIyIDguMjIyMDFDMTcuMTUxOSAyLjY2NDM0IDEzLjM5NDkgMC42NzQ0MTYgNy4yNjkyNyAwLjY3NDQxNkM0LjkwMDIzIDAuNjc0NDE2IDIuMDQxNDQgMC44Mzk3NzQgMCAxLjA4ODUyVjIwLjkxMThINS45NjE5VjE2LjE4MzRIOC4wODYwN1pNODcuOTY2MiA4LjMwMzk5Qzg3Ljk2NjIgMTAuODc1NyA4Ni43NDE4IDEyLjYxNzQgODMuNjM3IDEyLjYxNzRIODIuNjU5NVY0LjQyNzIyQzgzLjAwNTEgNC40MDcyMyA4My4zMzEzIDQuNDA3MjMgODMuNjM3IDQuNDA3MjNDODYuNTc2NiA0LjQwNjk0IDg3Ljk2NjIgNS44MTY1NyA4Ny45NjYyIDguMzAzOTlaTTg0Ljc4MzMgMTYuMTgzNEM5MC4zMzMzIDE2LjE4MzQgOTMuODQ2NiAxMy4yOCA5My44NDY2IDguMjIyMDFDOTMuODQ2NiAyLjY2NDM0IDkwLjA5MDcgMC42NzQ0MTYgODMuOTY0NCAwLjY3NDQxNkM4MS41OTU4IDAuNjc0NDE2IDc4LjczNTQgMC44Mzk3NzQgNzYuNjkzNyAxLjA4ODUyVjIwLjkxMThIODIuNjU4NlYxNi4xODM0SDg0Ljc4MzNaTTEwMS42MDUgNi4xNDc1N0MxMDEuNjA1IDUuMDY5NzggMTAyLjY2OCA0LjU3MTQ1IDEwNC4zODIgNC41NzE0NUMxMDYuMjYxIDQuNTcxNDUgMTA4LjMwNCA0Ljk4NjQgMTA5LjY5MiA1LjU2OTI0TDEwOS4yMDIgMS4yNTVDMTA3LjY0OSAwLjkyMzE1NyAxMDYuMjYxIDAuNjc0NDE2IDEwMy43MyAwLjY3NDQxNkM5OC45MTA1IDAuNjc0NDE2IDk1LjY0NDEgMi42MDM1IDk1LjY0NDEgNi42NDY3NEM5NS42NDQxIDEzLjYxMTggMTA0Ljk1NyAxMi4yMDMgMTA0Ljk1NyAxNS40Mzc1QzEwNC45NTcgMTYuNjgwNCAxMDQuMDU3IDE3LjM0MzQgMTAxLjg1MSAxNy4zNDM0Qzk5Ljg5NCAxNy4zNDM0IDk2Ljg2OTQgMTYuNjgwNCA5NS4wNzI4IDE1Ljc2ODRMOTUuNzI3NiAyMC4zMzE1Qzk3LjUyMzQgMjAuOTk0OSA5OS45NzMxIDIxLjMyNTYgMTAxLjkzNCAyMS4zMjU2QzEwNi45MTUgMjEuMzI1NiAxMTEgMTkuNjY2MyAxMTEgMTQuNjg5M0MxMTEgOC4wNTY2NiAxMDEuNjA1IDkuMjk5NTUgMTAxLjYwNSA2LjE0NzU3Wk03Mi4yMDMzIDEuMDg4NTJINjYuMjQxNFYyMC45MTE4SDcyLjIwMzNWMS4wODg1MlpNNDguMDI2MSAxLjA4ODUySDQyLjA2MzdWMjAuOTExOEg0OC4wMjYxVjEuMDg4NTJaTTU4LjM5OTEgMTYuOTI5NFYxLjA4ODUySDUyLjQzNjZWMjAuOTExOEg2My4yMTkxTDY0LjExNjYgMTYuOTI5NEg1OC4zOTkxWk0zNy42NTM0IDEuMDg4NTJIMzEuNjkxVjguOTY3NjdIMjUuNDgzNFYxLjA4ODUySDE5LjUxOThWMjAuOTExOEgyNS40ODMxVjEzLjExNDZIMzEuNjkwOFYyMC45MTE4SDM3LjY1MzJMMzcuNjUzNCAxLjA4ODUyWiIgZmlsbD0iIzAzMDMwMyI+PC9wYXRoPgo8L3N2Zz4="
  },
  "moura": {
    label: "Baterias Moura",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTM4IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjY3OV82MjU4KSI+CjxwYXRoIGQ9Ik02OC40ODI3IDEyLjE4OTZMNTEuMTc1NyAyOS44NDA1SDU2LjM3MzhMNjUuMDI0NCAyMS4wMTc1VjI5Ljg0MDVMNzMuNjk2NSAyMC45NjQ2VjI5Ljg0MDVINzcuMTU5NlYxMi4xNzM5TDY4LjQ4MjcgMjEuMDIzNFYxMi4xODk2WiIgZmlsbD0iYmxhY2siPjwvcGF0aD4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OS41NzExIDE3LjQ2NDNDODAuOTgxNyAxMy45OTYzIDg0LjMwMDggMTEuNzM3MSA4Ny45ODEzIDExLjczOUM4OS4xODAyIDExLjc0MSA5MC4zNjY1IDExLjk4MjIgOTEuNDcwNSAxMi40NDg1QzkyLjU3NDUgMTIuOTE0OCA5My41NzQyIDEzLjU5NjkgOTQuNDExNiAxNC40NTQ3Qzk2LjEyMzMgMTYuMjA4MSA5Ny4wNzk5IDE4LjU2MjMgOTcuMDc2IDIxLjAxMjdDOTcuMDc2NyAyNC43NjY4IDk0Ljg2MTcgMjguMTUyNiA5MS40NjAzIDI5LjU4OThDODguMDYxMyAzMS4wMjggODQuMTQ1NSAzMC4yMzQ0IDgxLjU0MjMgMjcuNTc5NUM3OC45Mzk5IDI0LjkyNDUgNzguMTYyMyAyMC45MzIzIDc5LjU3MTEgMTcuNDY0M1pNODIuMzUxNSAyMS4wMTI3QzgyLjM1MTUgMjQuMTgzOSA4NC44NzI0IDI2Ljc1NDYgODcuOTgxMyAyNi43NTQ2QzkxLjA5MSAyNi43NTQ2IDkzLjYxMTggMjQuMTgzOSA5My42MTE4IDIxLjAxMzZDOTMuNjExOCAxNy44NDE0IDkxLjA5MSAxNS4yNzA4IDg3Ljk4MTMgMTUuMjcwOEM4NC44NzI0IDE1LjI3MDggODIuMzUxNSAxNy44NDE0IDgyLjM1MTUgMjEuMDEyN1pNMTIyLjQxMiAxNS4yNjU5SDEyMy4wNTlMMTI2LjA5NSAxMi4xNzRIMTIxLjk4QzExNy43OTYgMTIuMTc0IDExNC40MDMgMTUuNjM0MiAxMTQuNDAzIDE5LjkwMjdWMjkuODQwNUgxMTcuODVWMTkuOTAxN0MxMTcuODUgMTcuMzQwOSAxMTkuODg2IDE1LjI2NDkgMTIyLjM5NyAxNS4yNjQ5TTEwNS43NDEgMjkuODQwNUMxMDQuODI3IDI5LjgzOTcgMTAzLjkyMyAyOS42NTY0IDEwMy4wODIgMjkuMzAxNUMxMDIuMjQxIDI4Ljk0NjUgMTAxLjQ3OCAyOC40MjcgMTAwLjg0IDI3Ljc3MzRDOTkuNTM1NiAyNi40Mzc3IDk4LjgwNjQgMjQuNjQ0MSA5OC44MDg4IDIyLjc3NzFWMTIuMTUyNUgxMDIuMjczVjIyLjc3NTFDMTAyLjI3NiAyNC43MjY2IDEwMy44MjggMjYuMzA3OCAxMDUuNzQxIDI2LjMwNzhIMTA4Ljc3MlYxMi4xNzRIMTEyLjIzNlYyOS44NDA1SDEwNS43NDFaTTEyOS4wMTcgMjIuMTExOUgxMzQuMzE5VjI2LjMwODhIMTI5LjAxN0MxMjguMDA1IDI2LjE0NDMgMTI3LjI2MiAyNS4yNTU2IDEyNy4yNjIgMjQuMjExM0MxMjcuMjYyIDIzLjE2NyAxMjguMDA1IDIyLjI3NzQgMTI5LjAxNyAyMi4xMTI5VjIyLjExMTlaTTEyOS41MzcgMTUuMjY1OUgxMjUuNjYzTDEyOC42OTQgMTIuMTc0SDEzMC4yMUMxMzQuMzk2IDEyLjE3NCAxMzcuNzg5IDE1LjYzMzMgMTM3Ljc5MiAxOS45MDI3VjI5Ljg0MDVIMTI4Ljc4N0MxMjYuODUzIDI5LjkwMjMgMTI1LjAzOSAyOC44ODQ0IDEyNC4wNTMgMjcuMTg1N0MxMjMuNTcgMjYuMzQ4MyAxMjMuMzE0IDI1LjM5OCAxMjMuMzE0IDI0LjQzMDhDMTIzLjMxNCAyMy40NjM1IDEyMy41NyAyMi41MTMzIDEyNC4wNTMgMjEuNjc2QzEyNS4wMzkgMTkuOTc2MiAxMjYuODUzIDE4Ljk1OTMgMTI4Ljc4NyAxOS4wMjFIMTM0LjE5NEMxMzMuNjkgMTYuODI0NSAxMzEuNzcgMTUuMjY5OCAxMjkuNTU4IDE1LjI2NTlIMTI5LjUzN1oiIGZpbGw9ImJsYWNrIj48L3BhdGg+CjxwYXRoIGQ9Ik0wIDI2LjIyODVWMzcuMDY5N0wyNS45ODQgMTcuMTkzOVY2LjM1Mjc5TDAgMjYuMjI4NVoiIGZpbGw9IiMzODNBM0UiPjwvcGF0aD4KPHBhdGggZD0iTTM3Ljc5MTIgMzcuMDY5N0w0Ny4yMzgzIDI5Ljg0MDZWMTQuNDk2TDM3Ljc5MDMgMjEuNzI1TDM3Ljc5MTIgMzcuMDY5N1oiIGZpbGw9IiM4NzhGOTUiPjwvcGF0aD4KPHBhdGggZD0iTTI1Ljk4NDQgMTcuMTk0TDE3LjcxNCAyMy41MTk3VjM3LjA2ODdMMjUuOTg0NCAzMC43NTk1VjE3LjE5NFoiIGZpbGw9IiM4NzhGOTUiPjwvcGF0aD4KPHBhdGggZD0iTTI1Ljk4MzggMzAuNzU5NVYxNy4xOTM5TDQ3LjIzNzkgMC45MzUxNzNWMTQuNDk1OUwyNS45ODM4IDMwLjc1OTVaIiBmaWxsPSIjMzUzQTNEIj48L3BhdGg+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNjY3OV82MjU4Ij4KPHJlY3Qgd2lkdGg9IjEzOCIgaGVpZ2h0PSIzNi44NTIzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjU3Mzg2OCkiPjwvcmVjdD4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4="
  },
  "unimed": {
    label: "Unimed",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTU1IDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNjY3OV82MjY5KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTM3LjIwNyAzLjYxODYySDE0NC4wMjFMMTU0LjI1MyAxNy4yMzkySDE0Ny40NDdMMTUyLjU0IDI0LjA1NDJIMTQ0LjAyMUwxMzguOTE5IDE3LjIzOTJIMTQyLjNMMTM3LjIwNyAxMC40MzM1SDE0Mi4zTDEzNy4yMDcgMy42MTg2MloiIGZpbGw9IiMxMTExMTEiPjwvcGF0aD4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzcuMjA2IDMuNjE4NjJIMTMwLjM5TDEyMC4xNSAxNy4yMzkySDEyNi45NjVMMTIxLjg2MyAyNC4wNTQySDEzMC4zOUwxMzUuNDkzIDE3LjIzOTJIMTMyLjA1OEwxMzcuMjA2IDEwLjQzMzVIMTMyLjEwNEwxMzcuMjA2IDMuNjE4NjJaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTMxMyA1LjAxMDg1SDAuODgwMjQ5VjE2LjU4ODhDMC44ODAyNDkgMjIuMTk0NiA1LjA0Nzk2IDI0LjM3NDcgMTAuMzMzMiAyNC4zNzQ3QzE2LjA3NjMgMjQuMzc0NyAxOS44Nzc3IDIyLjMzMjEgMTkuODc3NyAxNi4xNzY3VjUuMDIwMDFIMTIuNzQyMlYxNi4zMjMyQzEyLjc0MjIgMTguMTczNSAxMi4zMyAxOS40NzQyIDEwLjQyNDggMTkuNDc0MkM4LjY2NjA5IDE5LjQ3NDIgOC4xNTMxMyAxOC4xMzY5IDguMTUzMTMgMTYuMzIzMlY1LjAyMDAxVjUuMDEwODVaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNjczMyAyNC4wNDVIMjguNTM0VjE1Ljg0NjlDMjguNTM0IDE1LjA1OTIgMjguNTM0IDEzLjk1MDggMjkuNzc5NyAxMy45NTA4QzMxLjAyNTUgMTMuOTUwOCAzMC45Nzk2IDE1LjA1OTIgMzAuOTc5NiAxNS44NDY5VjI0LjA0NUgzNy44MzExVjE0LjE3OThDMzcuODMxMSAxMS40MDQ0IDM2LjQ4NDYgOS40OTkxOCAzMi44Mjk5IDkuNDk5MThDMzAuODg4IDkuNDk5MTggMjkuMDI4NiAxMC4yODY5IDI4LjE5NSAxMi4yNzQ2SDI4LjE0OTJWOS44MTk3M0gyMS42NjQxVjI0LjAzNThMMjEuNjczMyAyNC4wNDVaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDAuMjAzNCAyNC4wNDVINDcuMDU0OVY5LjgyOTAxSDQwLjIwMzRWMjQuMDQ1Wk00Ny4wNTQ5IDMuNjE4NjJINDAuMjAzNFY4LjM0NTA5SDQ3LjA1NDlWMy42MTg2MloiIGZpbGw9IiMxMTExMTEiPjwvcGF0aD4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OS4zMjcgMjQuMDQ0OUg1Ni4xNzg1VjE1Ljg0NjlDNTYuMTc4NSAxNS4wNTkyIDU2LjE3ODUgMTMuOTUwOSA1Ny40MzM0IDEzLjk1MDlDNTguNTg3NSAxMy45NTA5IDU4LjU4NzUgMTUuMDU5MiA1OC41ODc1IDE1Ljg0NjlWMjQuMDQ0OUg2NS40ODQ4VjE1Ljg0NjlDNjUuNDg0OCAxNS4wNTkyIDY1LjQ4NDggMTMuOTUwOSA2Ni42NDgxIDEzLjk1MDlDNjcuODkzOCAxMy45NTA5IDY3Ljg5MzggMTUuMDU5MiA2Ny44OTM4IDE1Ljg0NjlWMjQuMDQ0OUg3NC43NTQ1VjE1LjUyNjRDNzQuNzU0NSAxMi43NDE3IDc0Ljc1NDUgOS41MDgzMSA2OS43NTMzIDkuNTA4MzFDNjguMDQwNSA5LjUwODMxIDY1LjY3NzIgMTAuMjk2MSA2NS4yMTkyIDExLjk2MzJINjUuMTczNEM2NC42MTQ2IDEwLjI1MDMgNjIuNjI2OSA5LjUwODMxIDYwLjcyMTggOS41MDgzMUM1OC41NDE3IDkuNTA4MzEgNTYuNjkxNCAxMC4yOTYxIDU1Ljg1NzggMTIuMjgzN0g1NS44MTIxVjkuODI4OTVINDkuMzI3VjI0LjA0NDlaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODIuODYwNCAxNS41NzIxQzgyLjc2ODggMTQuNDYzOCA4My4wODk0IDEyLjc5NjggODQuNzE5OSAxMi43OTY4Qzg2LjI0OTUgMTIuNzk2OCA4Ni40MzI3IDE0LjUwOTYgODYuNDMyNyAxNS41NzIxSDgyLjg2OTZIODIuODYwNFpNOTIuMzU4OSAxOC41ODU4VjE3Ljc1MjJDOTIuMzU4OSAxMi45MzQxIDkwLjQxNzQgOS41MDgzMSA4NC45MDMgOS41MDgzMUM3OS4zODg4IDkuNTA4MzEgNzYuMTAwNSAxMS45MTczIDc2LjEwMDUgMTYuNjg5N0M3Ni4xMDA1IDIxLjQ2MTkgNzkuMTU5OSAyNC4zODM4IDg0LjkwMyAyNC4zODM4Qzg3LjMxMjEgMjQuMzgzOCA4OS40OTI1IDI0LjEwOTEgOTEuMjk2OSAyMy41NTAzVjE5Ljg5NTZDOTAuMjM0IDIwLjQ1NDQgODguNTEyIDIwLjc3NDkgODYuNjYxOCAyMC43NzQ5Qzg0LjYxOTEgMjAuNzc0OSA4Mi45OTc4IDIwLjM1MzYgODIuODYwNCAxOC41OTQ4SDkyLjM1ODlWMTguNTg1OFoiIGZpbGw9IiMxMTExMTEiPjwvcGF0aD4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTEuMDU1IDI0LjA0NVYzLjYxODYySDEwNC4yMDRWMTEuNjc5M0gxMDQuMTU3QzEwMy4wOTUgMTAuMTQ5NiAxMDEuNzAzIDkuNDk5MTkgOTkuODUyNCA5LjQ5OTE5Qzk1LjU5MzcgOS40OTkxOSA5My44MzQ3IDEyLjg3OTIgOTMuODM0NyAxNi43MjYzQzkzLjgzNDcgMjAuODAyNCA5NS41MDIgMjQuMzc0NyAxMDAuMDkxIDI0LjM3NDdDMTAyLjMxNiAyNC4zNzQ3IDEwMy43MDkgMjMuNTg3IDEwNC42MzQgMjEuNDUyOEgxMDQuNjhWMjQuMDQ1SDExMS4wNzNIMTExLjA1NVpNMTA0LjM4NyAxNi44NjM3QzEwNC4zODcgMTguMjEwMiAxMDQuMTU3IDE5Ljc3NjUgMTAyLjcyIDE5Ljc3NjVDMTAxLjE5IDE5Ljc3NjUgMTAwLjk2MSAxOC4yMDExIDEwMC45NjEgMTYuNzE3MUMxMDAuOTYxIDE1LjIzMzMgMTAxLjE5IDEzLjc0OTQgMTAyLjYyOCAxMy43NDk0QzEwNC4xNTcgMTMuNzQ5NCAxMDQuMzg3IDE1LjIzMzMgMTA0LjM4NyAxNi44NTQ2VjE2Ljg2MzdaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE2Ljc0MiAyNy40NjE1VjAuMjAxOTVIMTE1LjU5N1YyNy40NjE1SDExNi43NDJaIiBmaWxsPSIjMTExMTExIj48L3BhdGg+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNjY3OV82MjY5Ij4KPHJlY3Qgd2lkdGg9IjE1NC4wMDMiIGhlaWdodD0iMjcuNTk1OSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjUgMC4yMDIwNDkpIj48L3JlY3Q+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+"
  },
  "sankhya": {
    label: "Sankhya",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjgzIiB2aWV3Qm94PSIwIDAgMzI0IDgzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjMzN183ODEpIj4KPG1hc2sgaWQ9Im1hc2swXzIzMzdfNzgxIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTgiIHk9IjkiIHdpZHRoPSIyODgiIGhlaWdodD0iNjUiPgo8cGF0aCBkPSJNMzA2IDlIMThWNzRIMzA2VjlaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjMzN183ODEpIj4KPHBhdGggZD0iTTI4Ljg3NzEgNTkuMDQ1N0w0MC4zMDY5IDQ3LjAxN0M0MS4zODE3IDQ1Ljg4NTggNDEuOTg0OCA0NC4zNTQ1IDQxLjk4NDggNDIuNzQwN1YzMy4yNzc2QzQxLjk4NDggMjguODc3MSA0My42NDk0IDI0LjY1NiA0Ni42MTE2IDIxLjUzODRMNTEuMTczMiAxNi43MjQxQzUxLjU3OTQgMTYuMzEwMyA1MS4yMTI0IDE1LjU5MjkgNTAuNjYyIDE1LjcwMzNDNDkuMjcyNiAxNS45NjU0IDQ3Ljg4MyAxNi4yOTY1IDQ2LjQ4MDYgMTYuNjgyN0MyNy41Nzk1IDIyLjAyMTIgMTUuMDg3OSAzNy40NDM0IDE4LjU4NzcgNTEuMTU1NEMxOS4zMzQ4IDU0LjEwNzMgMjAuNzc2NiA1Ni43NDIyIDIyLjc1NTkgNTguOTkwN0MyNC4zODEyIDYwLjg1MjkgMjcuMTg2MiA2MC44MzkgMjguODkwMiA1OS4wNDU3IiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik03Ni43MDczIDIzLjk3NzJMNjcuNzAyNCAzMy40NTRDNjYuNjI3NSAzNC41ODUzIDY2LjAyNDYgMzYuMTE2NSA2Ni4wMjQ2IDM3LjcxNjZWNDcuMTc5N0M2Ni4wMjQ2IDUxLjU4MDIgNjQuMzYgNTUuODAxMiA2MS40MTA4IDU4LjkxODlMNTQuNDExMiA2Ni4yNzE0QzU0LjAxOCA2Ni42OTkgNTQuMzcyIDY3LjQwMjYgNTQuOTIyNCA2Ny4yOTIxQzU2LjMxMTggNjcuMDMgNTcuNzAxMSA2Ni42OTkgNTkuMTAzNyA2Ni4zMTI3Qzc4LjAwNDkgNjAuOTg4IDkwLjQ5NjQgNDUuNTUxOSA4Ni45OTY4IDMxLjg1MzlDODYuMjQ5NiAyOC45MDE5IDg0LjgwNzcgMjYuMjY3MSA4Mi44Mjg0IDI0LjAxODZDODEuMjAzMSAyMi4xNTYzIDc4LjM5ODEgMjIuMTcwMSA3Ni42OTQgMjMuOTYzNCIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNNjYuOTk1NiAxMC43NzFMNTEuNjg2IDI2Ljg4MzFDNTAuMDczNyAyOC41Nzk4IDQ5LjE2OTMgMzAuODgzNSA0OS4xNjkzIDMzLjI4MzdWNDYuNDk4OUM0OS4xNjkzIDQ3LjY5OTEgNDguNzEwNiA0OC44NTc5IDQ3LjkxMDkgNDkuNjk5MkwyNy43Nzc3IDcwLjg4NzhDMjcuNDg5MyA3MS4xOTEyIDI3LjU4MTEgNzEuNzAxNyAyNy45NDgxIDcxLjg2NzJDMjkuNTA3OSA3Mi41OTgzIDMxLjE1OTUgNzMuMjE5IDMyLjg4OTcgNzMuNzU3MUMzNC45MjEzIDc0LjM3NzkgMzcuMTIzNCA3My44MjYxIDM4LjYxNzcgNzIuMjM5Nkw1Ni4zNTIzIDUzLjU3NTVDNTcuOTY0NCA1MS44Nzg4IDU4Ljg2ODggNDkuNTc1MiA1OC44Njg4IDQ3LjE3NDlWMzMuOTU5N0M1OC44Njg4IDMyLjc1OTUgNTkuMzI3OCAzMS42MDA4IDYwLjEyNzIgMzAuNzU5NEw3Ny44MzU1IDEyLjEyMjlDNzguMTI0IDExLjgxOTQgNzguMDMyMiAxMS4zMDkgNzcuNjY1MyAxMS4xNDM1Qzc2LjEwNTQgMTAuNDEyNCA3NC40NTM4IDkuNzkxNjMgNzIuNzIzNyA5LjI2NzQzQzcwLjY5MTkgOC42NDY2OCA2OC40ODk5IDkuMTk4NDYgNjYuOTk1NiAxMC43NzFaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMjguMzE4IDQ2LjQ0NjdDMTI4LjMxOCA1Mi4wNjEgMTIzLjI1OSA1NC4xNzE3IDExNC44NTcgNTQuMTcxN0MxMTEuNTggNTQuMTcxNyAxMDcuNDUxIDUzLjk5MjIgMTAzLjYyNCA1My40NjgxQzEwMy4zNDggNTMuNDI2NyAxMDMuMTM5IDUzLjE3ODMgMTAzLjEzOSA1Mi44NzQ5VjUwLjg2MDlDMTAzLjEzOSA0OS4xMjI4IDEwNC41NTQgNDcuNzU3MSAxMDYuMTkzIDQ3LjkwODlDMTA5LjM3OCA0OC4yMTIzIDExMi4xNTcgNDguMzUwMiAxMTQuNzc4IDQ4LjM1MDJDMTE4LjYwNiA0OC4zNTAyIDEyMS43NjUgNDcuOTYzOSAxMjEuNzY1IDQ1LjM3MDdWNDMuNjg3NkMxMjEuNzY1IDQxLjkwODMgMTIxLjAzIDQxLjc3MDEgMTE3LjMzNCA0MC44MDQ3TDEwOS4zOTEgMzguNzkwNkMxMDUuNjAzIDM3LjgyNTEgMTAzLjA0NyAzNi4xMDA3IDEwMy4wNDcgMzEuMzAwMlYyOC4xODI2QzEwMy4wNDcgMjIuNTEzIDEwOC42MTggMjAuNDQzOCAxMTYuNjkyIDIwLjQ0MzhDMTIwLjI5NiAyMC40NDM4IDEyMy40MjkgMjAuNjIzMiAxMjcuNTMyIDIxLjM2ODFDMTI3LjgwNyAyMS40MjMzIDEyOC4wMDQgMjEuNjcxNiAxMjguMDA0IDIxLjk2MTNWMjMuNzU0NUMxMjguMDA0IDI1LjUwNjQgMTI2LjU0OSAyNi44NzIxIDEyNC44ODQgMjYuNjkyOEMxMjEuOTc0IDI2LjM3NTUgMTE5LjYwMiAyNi4yNjUyIDExNi44NjIgMjYuMjY1MkMxMTIuNjY4IDI2LjI2NTIgMTA5LjYxNCAyNi41OTYyIDEwOS42MTQgMjkuMTg5NlYzMC40ODYzQzEwOS42MTQgMzIuMzYyMyAxMTAuNzE1IDMyLjc4OTkgMTE1LjA5MyAzMy45NDg4TDEyMi4wMjcgMzUuNzI4MkMxMjUuOTk4IDM2Ljc5MDQgMTI4LjMxOCAzOC4wODcyIDEyOC4zMTggNDIuOTI5VjQ2LjQzMjdWNDYuNDQ2N1oiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTE4Mi4xMTUgMzguNDE5NkMxODIuMTE1IDM0LjUyOTUgMTc5LjUyIDM0LjAwNTQgMTc1Ljg2MyAzNC4wMDU0QzE3MS42NjkgMzQuMDA1NCAxNzAuMjAxIDM0LjcyMjcgMTY4Ljk2OSAzNy40MTI1VjUwLjg3NjFDMTY4Ljk2OSA1Mi41MTc2IDE2Ny43MSA1My44NDIgMTY2LjE2MyA1My44NDJIMTYzLjAxOEMxNjIuNzAzIDUzLjg0MiAxNjIuNDU0IDUzLjU3OTcgMTYyLjQ1NCA1My4yNDg2VjMxLjU5MTJDMTYyLjQ1NCAyOS45NjM1IDE2My43MTIgMjguNjI1NCAxNjUuMjcyIDI4LjYyNTRIMTY3Ljc1QzE2OC4wMzggMjguNjI1NCAxNjguMjc0IDI4Ljg0NjEgMTY4LjMxMyAyOS4xNDk2TDE2OC42NjcgMzIuMjI1OEgxNjguOTQyQzE3MC4wNDMgMjkuMjA0OCAxNzMuNjQ4IDI4LjE0MjYgMTc4LjYxNiAyOC4xNDI2QzE4NC4zNyAyOC4xNDI2IDE4OC42NTYgMjkuOTYzNSAxODguNjU2IDM1LjI0NjlWNTAuODc2MUMxODguNjU2IDUyLjUxNzYgMTg3LjM5OCA1My44NDIgMTg1LjgzOCA1My44NDJIMTgyLjY5MkMxODIuMzc4IDUzLjg0MiAxODIuMTI5IDUzLjU3OTcgMTgyLjEyOSA1My4yNDg2VjM4LjQzMzNMMTgyLjExNSAzOC40MTk2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMjA0LjQ3NCA0Mi42MjUxTDIwMy4wNTkgNDIuNzQ5M0MyMDEuNjA0IDQyLjg4NzIgMjAwLjQ5IDQ0LjE1NjQgMjAwLjQ5IDQ1LjcwMTNWNTAuODc0M0MyMDAuNDkgNTIuNTAxOSAxOTkuMjMxIDUzLjg0IDE5Ny42NzEgNTMuODRIMTk0LjUyNkMxOTQuMjExIDUzLjg0IDE5My45NjIgNTMuNTc3OSAxOTMuOTYyIDUzLjI0NjhWMjIuMTI2NEMxOTMuOTYyIDIwLjQ5ODYgMTk1LjIyIDE5LjE3NDMgMTk2Ljc4IDE5LjE3NDNIMTk5LjkyNkMyMDAuMjQxIDE5LjE3NDMgMjAwLjQ5IDE5LjQzNjQgMjAwLjQ5IDE5Ljc2NzVWMzYuNDg2NkMyMDAuNDkgMzYuODMxMyAyMDAuNzc4IDM3LjEwNzMgMjAxLjEwNSAzNy4wNzk3TDIwNS4zIDM2LjY2NThDMjA1LjY0MSAzNi42MzgyIDIwNS45NTUgMzYuNDcyNyAyMDYuMTkxIDM2LjIxMDZMMjEyLjIwOCAyOS41NjE2QzIxMi43NDUgMjguOTY4NSAyMTMuNDc5IDI4LjYzNzQgMjE0LjIzOSAyOC42Mzc0SDIxOC45ODRDMjE5LjQ4MiAyOC42Mzc0IDIxOS43MzEgMjkuMjU4MiAyMTkuMzkxIDI5LjYzMDZMMjEwLjU1NiAzOS41MzUxTDIyMC4xNzcgNTIuODg4MkMyMjAuNDUyIDUzLjI3NDUgMjIwLjE5IDUzLjg0IDIxOS43MzEgNTMuODRIMjE0Ljk4N0MyMTQuMTIxIDUzLjg0IDIxMy4zMDkgNTMuNDI2MyAyMTIuNzcxIDUyLjcwOUwyMDUuNjkzIDQzLjE5MDZDMjA1LjQwNSA0Mi44MDQzIDIwNC45MzMgNDIuNTgzOCAyMDQuNDYxIDQyLjYyNTEiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTI0My4yODIgMzguNDIxN0MyNDMuMjgyIDM0LjUzMTcgMjQwLjc3OCAzNC4wMDc1IDIzNy4wMjkgMzQuMDA3NUMyMzIuODM1IDM0LjAwNzUgMjMxLjM2NyAzNC43MjQ4IDIzMC4xMzUgMzcuNDE0N1Y1MC44NzgzQzIzMC4xMzUgNTIuNTE5NyAyMjguODc2IDUzLjg0NDEgMjI3LjMzIDUzLjg0NDFIMjI0LjE4NEMyMjMuODY5IDUzLjg0NDEgMjIzLjYyIDUzLjU4MiAyMjMuNjIgNTMuMjUxVjIyLjEzMDRDMjIzLjYyIDIwLjQ4ODggMjI0Ljg3OCAxOS4xNjQ2IDIyNi40MjUgMTkuMTY0NkgyMjkuNTcxQzIyOS44ODYgMTkuMTY0NiAyMzAuMTM1IDE5LjQyNjYgMjMwLjEzNSAxOS43NTc3VjI4LjE0NDhMMjI5LjgyIDMyLjIyNzlIMjMwLjA5NUMyMzEuMTk2IDI5LjIwNyAyMzQuODAxIDI4LjE0NDggMjM5Ljc2OSAyOC4xNDQ4QzI0NS41MjMgMjguMTQ0OCAyNDkuODA5IDI5Ljk2NTcgMjQ5LjgwOSAzNS4yNDlWNTAuODc4M0MyNDkuODA5IDUyLjUxOTcgMjQ4LjU1MSA1My44NDQxIDI0Ny4wMDQgNTMuODQ0MUgyNDMuODU4QzI0My41NDQgNTMuODQ0MSAyNDMuMjk1IDUzLjU4MiAyNDMuMjk1IDUzLjI1MVYzOC40MzU2TDI0My4yODIgMzguNDIxN1oiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTI2MS45OTkgNTUuMTgxOUwyNTEuOTczIDI5LjQ1NUMyNTEuODE1IDI5LjA2ODcgMjUyLjA5MSAyOC42NDExIDI1Mi40OTggMjguNjQxMUgyNTYuNTQ4QzI1Ny43IDI4LjY0MTEgMjU4LjczNiAyOS4zODYgMjU5LjE2OCAzMC41MTcyTDI2NS41NjUgNDcuNjA4N0wyNzEuNzQgMzAuNTQ0OEMyNzIuMTU4IDI5LjM5OTggMjczLjE5NCAyOC42NDExIDI3NC4zNzQgMjguNjQxMUgyNzguMzMyQzI3OC43MjcgMjguNjQxMSAyNzkuMDAxIDI5LjA1NSAyNzguODU3IDI5LjQ0MTJMMjY3LjAzNSA2MS45NDEyQzI2Ni42MTQgNjMuMDg2MSAyNjUuNTc5IDYzLjg0NDggMjY0LjQxMyA2My44NDQ4SDI2MC41MDZDMjYwLjExMyA2My44NDQ4IDI1OS44MzcgNjMuNDMxMSAyNTkuOTgxIDYzLjA0NDhMMjYyLjAzOSA1Ny4zNzUyQzI2Mi4zMDEgNTYuNjcxNiAyNjIuMjkgNTUuODg1MyAyNjIuMDEzIDU1LjE5NTYiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTI5OS43NSA1MC4xNDkySDI5OS40NzZDMjk4LjQ2NiA1My4wMzIyIDI5NC44NjEgNTQuMTc3MSAyODkuOTg2IDU0LjE3NzFDMjg0LjM3NSA1NC4xNzcxIDI4MC4wOSA1Mi4yNTk4IDI4MC4wOSA0Ny4wMTc4QzI4MC4wOSA0MC41MDY3IDI4My40MTggMzkuMDk5NyAyOTAuMDI2IDM4LjkwNjVDMjkzLjcyMSAzOC43OTYyIDI5NS41MTYgMzkuMDAzMSAyOTkuNDg4IDM5LjM3NTdWMzcuNTU0N0MyOTkuNDg4IDM1LjE1NDQgMjk3LjUyMyAzMy43NjEzIDI5MS4wOTkgMzMuNzYxM0MyODguNzc5IDMzLjc2MTMgMjg2LjAxNSAzMy45MjY4IDI4Mi42OTggMzQuMzU0NEMyODIuMzU3IDM0LjM5NTcgMjgyLjA1NSAzNC4xMiAyODIuMDU1IDMzLjc3NVYzMS41OTU1QzI4Mi4wNTUgMzAuMTA1NyAyODMuMTE2IDI4LjgzNjYgMjg0LjUzMyAyOC42NTcyQzI4Ny41NzMgMjguMjcxIDI5MC4zMjUgMjguMTYwNiAyOTMuMTA2IDI4LjE2MDZDMzAxLjU4NSAyOC4xNjA2IDMwNi4wMTcgMzAuMjI5OCAzMDYuMDE3IDM2LjA3ODhWNTAuODgwMkMzMDYuMDE3IDUyLjUyMTkgMzA0Ljc1OCA1My44NDYxIDMwMy4yMTEgNTMuODQ2MUgzMDAuNjgyQzMwMC4zOTQgNTMuODQ2MSAzMDAuMTU3IDUzLjYyNTMgMzAwLjExNyA1My4zMjE5TDI5OS43NjQgNTAuMTQ5MkgyOTkuNzVaTTI5OS40NzYgNDMuNzYyMkMyOTcuMzI2IDQzLjQ3MjUgMjk0Ljg2MSA0My4yMzgxIDI5My4wOTIgNDMuMjM4MUMyODguOTkgNDMuMjM4MSAyODYuNjU2IDQzLjYyNDQgMjg2LjY1NiA0Ni4yMTc2QzI4Ni42NTYgNDguNjE4IDI4OS4zMDQgNDguOTQ5IDI5Mi41MDIgNDguOTQ5QzI5Ni4xNDYgNDguOTQ5IDI5OC4xMTMgNDguMTc2NCAyOTkuNDg4IDQ2LjI1OTJWNDMuNzYyMkgyOTkuNDc2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMTUxLjA1MSA1MC4xNDkySDE1MC43NzZDMTQ5Ljc2NyA1My4wMzIyIDE0Ni4xNjIgNTQuMTc3MSAxNDEuMjg2IDU0LjE3NzFDMTM1LjY3NiA1NC4xNzcxIDEzMS4zOSA1Mi4yNTk4IDEzMS4zOSA0Ny4wMTc4QzEzMS4zOSA0MC41MDY3IDEzNC43MTkgMzkuMDk5NyAxNDEuMzI1IDM4LjkwNjVDMTQ1LjAyMiAzOC43OTYyIDE0Ni44MTcgMzkuMDAzMSAxNTAuNzg5IDM5LjM3NTdWMzcuNTU0N0MxNTAuNzg5IDM1LjE1NDQgMTQ4LjgyMyAzMy43NjEzIDE0Mi40IDMzLjc2MTNDMTQwLjA4IDMzLjc2MTMgMTM3LjMxNCAzMy45MjY4IDEzMy45OTggMzQuMzU0NEMxMzMuNjU3IDM0LjM5NTcgMTMzLjM1NiAzNC4xMiAxMzMuMzU2IDMzLjc3NVYzMS41OTU1QzEzMy4zNTYgMzAuMTA1NyAxMzQuNDE4IDI4LjgzNjYgMTM1LjgzMyAyOC42NTcyQzEzOC44NzQgMjguMjcxIDE0MS42MjcgMjguMTYwNiAxNDQuNDA2IDI4LjE2MDZDMTUyLjg4NiAyOC4xNjA2IDE1Ny4zMTYgMzAuMjI5OCAxNTcuMzE2IDM2LjA3ODhWNTAuODgwMkMxNTcuMzE2IDUyLjUyMTkgMTU2LjA1OCA1My44NDYxIDE1NC41MTEgNTMuODQ2MUgxNTEuOTgyQzE1MS42OTMgNTMuODQ2MSAxNTEuNDU3IDUzLjYyNTMgMTUxLjQxOCA1My4zMjE5TDE1MS4wNjQgNTAuMTQ5MkgxNTEuMDUxWk0xNTAuNzc2IDQzLjc2MjJDMTQ4LjYyNiA0My40NzI1IDE0Ni4xNjIgNDMuMjM4MSAxNDQuMzkyIDQzLjIzODFDMTQwLjI5IDQzLjIzODEgMTM3Ljk1NyA0My42MjQ0IDEzNy45NTcgNDYuMjE3NkMxMzcuOTU3IDQ4LjYxOCAxNDAuNjA0IDQ4Ljk0OSAxNDMuODAzIDQ4Ljk0OUMxNDcuNDYgNDguOTQ5IDE0OS40MTMgNDguMTc2NCAxNTAuNzg5IDQ2LjI1OTJWNDMuNzYyMkgxNTAuNzc2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjMzN183ODEiPgo8cmVjdCB3aWR0aD0iMjg4IiBoZWlnaHQ9IjY1IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTggOSkiPjwvcmVjdD4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4="
  },
  "lockton": {
    label: "Lockton",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTMzIDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNi42ODUgMi44MzkwOEwxMjYuMjY1IDIuODM3OTJMMTI2LjI2NiAyLjE1Nzg0TDEyNi45NDUgMi4xNjAxN0MxMjcuMjczIDIuMTYwNzUgMTI3LjU2NSAyLjE4NjQyIDEyNy41NjQgMi41MzExMkMxMjcuNTY0IDIuOTAyNjYgMTI3LjA1NiAyLjg0MDI1IDEyNi42ODUgMi44MzkwOFpNMTI3Ljk1OSAyLjQ5MDg4QzEyNy45NjEgMS45MTUyIDEyNy41MTcgMS43NjUzIDEyNy4wMjMgMS43NjQxM0wxMjUuODczIDEuNzYxOEwxMjUuODY3IDQuNDk0MzdMMTI2LjI2MSA0LjQ5NjEyTDEyNi4yNjQgMy4yMzUxMkwxMjYuNzcxIDMuMjM2MjhMMTI3LjQ2NiA0LjQ5ODQ2TDEyNy45MTkgNC40OTk2M0wxMjcuMjI5IDMuMjM2ODdDMTI3LjU5NSAzLjIyNTIgMTI3Ljk1OCAzLjAyNzQ4IDEyNy45NTkgMi40OTA4OFoiIGZpbGw9IiMxNTE1MTUiPjwvcGF0aD4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjYuODA0IDUuMTQ2NDZDMTI2LjUzNiA1LjE0NjcgMTI2LjI3MSA1LjA5NDA0IDEyNi4wMjQgNC45OTE1MkMxMjUuNzc2IDQuODg5IDEyNS41NTIgNC43Mzg2MyAxMjUuMzYzIDQuNTQ5MDVDMTI1LjE3NCA0LjM1OTQ3IDEyNS4wMjQgNC4xMzQ0MiAxMjQuOTIyIDMuODg2ODJDMTI0LjgyIDMuNjM5MjIgMTI0Ljc2OSAzLjM3Mzk0IDEyNC43NyAzLjEwNjIyQzEyNC43NjkgMi44Mzg0MiAxMjQuODIyIDIuNTczMjQgMTI0LjkyNSAyLjMyNTk5QzEyNS4wMjggMi4wNzg3NCAxMjUuMTc5IDEuODU0MzEgMTI1LjM2OSAxLjY2NTYyQzEyNS41NTkgMS40NzY5MyAxMjUuNzg1IDEuMzI3NzMgMTI2LjAzMyAxLjIyNjYyQzEyNi4yODEgMS4xMjU1IDEyNi41NDYgMS4wNzQ0NyAxMjYuODE0IDEuMDc2NDdDMTI3LjA4MiAxLjA3NTkzIDEyNy4zNDcgMS4xMjgzOSAxMjcuNTk0IDEuMjMwODJDMTI3Ljg0MSAxLjMzMzI1IDEyOC4wNjYgMS40ODM2NCAxMjguMjU1IDEuNjczM0MxMjguNDQ0IDEuODYyOTYgMTI4LjU5NCAyLjA4ODE1IDEyOC42OTUgMi4zMzU4OEMxMjguNzk3IDIuNTgzNjIgMTI4Ljg0OCAyLjg0OSAxMjguODQ3IDMuMTE2NzJDMTI4Ljg0NiAzLjM4NDI2IDEyOC43OTMgMy42NDkxMSAxMjguNjkgMy44OTYwOEMxMjguNTg3IDQuMTQzMDQgMTI4LjQzNyA0LjM2NzI0IDEyOC4yNDcgNC41NTU4M0MxMjguMDU3IDQuNzQ0NDIgMTI3LjgzMiA0Ljg5MzY3IDEyNy41ODQgNC45OTUwMkMxMjcuMzM3IDUuMDk2MzggMTI3LjA3MSA1LjE0Nzg1IDEyNi44MDQgNS4xNDY0NlpNMTI2LjgxNCAwLjY4MjE5MUMxMjYuNDk0IDAuNjc4ODY2IDEyNi4xNzcgMC43MzkxNTQgMTI1Ljg4MSAwLjg1OTU1NkMxMjUuNTg0IDAuOTc5OTU3IDEyNS4zMTQgMS4xNTgwNyAxMjUuMDg3IDEuMzgzNTVDMTI0Ljg2IDEuNjA5MDMgMTI0LjY4IDEuODc3MzcgMTI0LjU1OCAyLjE3M0MxMjQuNDM1IDIuNDY4NjMgMTI0LjM3MyAyLjc4NTY1IDEyNC4zNzQgMy4xMDU2NEMxMjQuMzcxIDMuNDI1NzEgMTI0LjQzMiAzLjc0MzE0IDEyNC41NTMgNC4wMzk0OUMxMjQuNjc0IDQuMzM1ODMgMTI0Ljg1MyA0LjYwNTE4IDEyNS4wNzkgNC44MzE4N0MxMjUuMzA1IDUuMDU4NTUgMTI1LjU3NCA1LjIzODA2IDEyNS44NjkgNS4zNTk5NkMxMjYuMTY1IDUuNDgxODUgMTI2LjQ4MyA1LjU0MzcgMTI2LjgwMyA1LjU0MTkxQzEyNy4xMjMgNS41NDUyNCAxMjcuNDQxIDUuNDg0OSAxMjcuNzM3IDUuMzY0MzlDMTI4LjAzNCA1LjI0Mzg5IDEyOC4zMDMgNS4wNjU2MyAxMjguNTMxIDQuODM5OTdDMTI4Ljc1OCA0LjYxNDMxIDEyOC45MzggNC4zNDU3NyAxMjkuMDYgNC4wNDk5M0MxMjkuMTgzIDMuNzU0MSAxMjkuMjQ1IDMuNDM2ODggMTI5LjI0NCAzLjExNjcyQzEyOS4yNDYgMi43OTY3MiAxMjkuMTg1IDIuNDc5MzkgMTI5LjA2NCAyLjE4MzE3QzEyOC45NDMgMS44ODY5NSAxMjguNzY0IDEuNjE3NzYgMTI4LjUzOCAxLjM5MTI0QzEyOC4zMTIgMS4xNjQ3MSAxMjguMDQ0IDAuOTg1Mzc4IDEyNy43NDggMC44NjM2NTRDMTI3LjQ1MiAwLjc0MTkzIDEyNy4xMzQgMC42ODAyNDcgMTI2LjgxNCAwLjY4MjE5MVpNMTAuMjA3OSAxLjU3MzQxTDMuMDQ0MzMgMS41NTY1TDMgMjAuMzQzM0wxNS4zNzIxIDIwLjM3MjVMMTUuMzgzMiAxNS43NjY1TDEwLjE3NDcgMTUuNzUzNkwxMC4yMDc5IDEuNTczNDFaIiBmaWxsPSIjMTUxNTE1Ij48L3BhdGg+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuNDQ5NCAxNS43NjQxQzIyLjQ1ODcgMTUuNzU5NSAyMS44Nzg0IDEyLjk5NTQgMjEuODgzNiAxMC44NjI0QzIxLjg4ODMgOC44NzgxNiAyMi4zODUyIDYuMDU1MTggMjQuNDcyMSA2LjA1OTg1QzI2LjU1NzkgNi4wNjQ1MSAyNy4wNDAyIDguODkwOTkgMjcuMDM1NiAxMC44NzQxQzI3LjAyOTcgMTMuMDA3NiAyNi40Mzg5IDE1Ljc2ODggMjQuNDQ5NCAxNS43NjQxWk0yNC40NDM2IDEuMjA3MTJDMTguOTUzMyAxLjE5NDI5IDE0LjQ3NTEgNS4xNjg2MyAxNC40NjA1IDExLjA0NUMxNC40NDY1IDE3LjA0NjcgMTguOTIxMyAyMC42NTMgMjQuNDM3MSAyMC42NjU4QzI5Ljk1MjUgMjAuNjc4NyAzNC40NDQ3IDE3LjA5NCAzNC40NTkzIDExLjA5MjJDMzQuNDcyNyA1LjIxNTg3IDI5LjkzNSAxLjIxOTM3IDI0LjQ0MzYgMS4yMDcxMlpNMzQuNTk0IDExLjIxNTNDMzQuNTgxMiAxNi41NTc0IDM5LjExNTUgMjAuNzE4MyA0NC45MzA2IDIwLjczMThDNDYuMjU3NSAyMC43MzUzIDQ4LjY3OCAyMC41MTAxIDQ5Ljg2ODQgMTkuOTkxTDQ5Ljg4NTQgMTUuMDkxNkM0OC42ODY4IDE1LjkwNyA0Ny42MTE4IDE2LjEyODcgNDYuMDg2IDE1LjkyMTZDNDMuOTkzOSAxNS43MzI2IDQxLjkzMjYgMTMuNDgyNCA0MS45Mzg0IDEwLjk1MzRDNDEuOTQ0MyA4LjUyMjk2IDQzLjM2NzQgNi4xNTQzNCA0Ni4xMDE4IDUuNzk4NTVDNDcuNzY1MiA1LjU4MTU3IDQ4Ljg2MjkgNi4xMTc1OSA0OS45MDQ2IDcuMDE3NTZMNDkuOTExNiAxLjc3NDA1QzQ4LjM0MzggMS4yNzI0NSA0Ni44Mzk2IDEuMjYwNzkgNDUuMTYzMyAxLjI1NjdDMzkuMTg2IDEuMjQyMTIgMzQuNjA2MyA1Ljc0ODk3IDM0LjU5NCAxMS4yMTUzWk02OS40Nzc2IDEuNjk3NjVMNjEuNDMzMyAxLjY3MzE1QzYxLjQzMzMgMS42NzMxNSA1Ny41NTQ2IDguOTI3MTYgNTcuNDE4MiA5LjE4OTYyTDU3LjQzNTcgMS42NjkwN0w1MC4yMzgyIDEuNjUyMTVMNTAuMTkzMyAyMC40NzQ1TDU3LjM5MTMgMjAuNDkyTDU3LjQxIDEyLjgxODFMNjEuMjU1NCAyMC40ODFMNjkuNjEzNSAyMC40OTk2TDYzLjc5OSAxMC42NzM0TDY5LjQ3NzYgMS42OTc2NVpNODQuOTA1NSAxLjczMzgxTDY5LjU3NzQgMS42OTc2NUw2OS41NjU3IDYuNjQ0ODZMNzMuNTY4IDYuNjU1MzZMNzMuNTQ1OSAyMC41MDk1TDgwLjc3ODMgMjAuNTI3TDgwLjgyNSA2LjY2NzAyTDg0Ljg5MzIgNi42ODA0NEw4NC45MDU1IDEuNzMzODFaTTExNi45NzIgMTEuMTk5TDExMi43MzQgMS44ODQyOUwxMDQuODc3IDEuODY1MDRMMTA0LjgzNCAyMC42NTE4TDExMi4xOTMgMjAuNjg5OEwxMTIuMjE0IDExLjY2MjZMMTE2LjE0NCAyMC42Nzg3TDEyNC4wNzMgMjAuNjk2OEwxMjQuMTE3IDEuOTE1NzlMMTE2LjkxNSAxLjg5ODg3TDExNi45NzIgMTEuMTk5WiIgZmlsbD0iIzE1MTUxNSI+PC9wYXRoPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk0LjM4NzYgMTUuODI4M0M5Mi4zNTAyIDE1LjgyMzYgOTEuNzU3MSAxMy4xNDcgOTEuNzYyOSAxMS4wMTQ2QzkxLjc2NyA5LjAzMDM4IDkyLjI3NSA2LjE1NjA4IDk0LjQxMDkgNi4xNjE5MUM5Ni41NDc5IDYuMTY3MTYgOTcuMDQyIDkuMDQyNjMgOTcuMDM3MyAxMS4wMjYzQzk3LjAzMjEgMTMuMTU5MyA5Ni40MjU1IDE1LjgzMzUgOTQuMzg3NiAxNS44MjgzWk05NC40MjI1IDEuMzYwNTJDODguODAxMSAxLjM0NzEgODQuMTc1OCA1LjI2ODM2IDg0LjE2MTggMTEuMTQ3Qzg0LjE0NzMgMTcuMTQ3IDg4LjU3NzcgMjAuODM2NyA5NC4yMjQyIDIwLjg0OTZDOTkuODY5IDIwLjg2MzYgMTA0LjYyMyAxNy4xOTYgMTA0LjYzNyAxMS4xOTU0QzEwNC42NTEgNS4zMTczNSAxMDAuMDQ0IDEuMzczMzUgOTQuNDIyNSAxLjM2MDUyWiIgZmlsbD0iIzE1MTUxNSI+PC9wYXRoPgo8L3N2Zz4="
  },
  "facchini": {
    label: "Facchini",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1NiIgaGVpZ2h0PSIyMDMiIHZpZXdCb3g9IjAgMCAxNDU2IDIwMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTk4LjY4MVYzLjg1MTk0SDE5Ni42MjlWNTYuNjYzMUg2NS40NDdWNzguMjI2N0gxNTEuNDVWMTMzLjYzSDY1LjQ0N1YxOTguNjgxSDBaTTc5OS40NzUgMTg2Ljk0NUM3ODQuNjA3IDE5My4yMDkgNzcyLjUxMiAxOTcuMzQ5IDc2My4wOCAxOTkuNDczQzc1My43MiAyMDEuNTYxIDc0Mi40ODggMjAyLjY0MSA3MjkuNDkyIDIwMi42NDFDNjk0LjYwOSAyMDIuNjQxIDY2Ni40OTMgMTkzLjM4OSA2NDUuMTQ2IDE3NC44MTNDNjIzLjcyNiAxNTYuMjM4IDYxMy4wNyAxMzEuNzk0IDYxMy4wNyAxMDEuMzc0QzYxMy4wNyA3MC45NTQ5IDYyMy43NjIgNDYuNDc1MyA2NDUuMTQ2IDI3Ljg2MzZDNjY2LjQ5MyA5LjI4Nzg1IDY5NC42NDUgMCA3MjkuNDkyIDBDNzQyLjUyNCAwIDc1My43MiAxLjA0Mzk4IDc2My4wOCAzLjE2Nzk1Qzc3Mi41MTIgNS4yNTU5MiA3ODQuNTcxIDkuNDMxODUgNzk5LjQ3NSAxNS42NTk3TDgwNC4yNjMgNzIuNTc0OEM3OTEuMzAzIDY2LjQxODkgNzc1LjY4IDU4Ljg5NTEgNzY3LjAwNCA1Ni43MzUxQzc1OC4yOTIgNTQuNTc1MSA3NDcuNzggNTMuNTMxMSA3MzUuNTA0IDUzLjUzMTFDNzE5LjU5MiA1My41MzExIDcwNi44ODUgNTcuODg3MSA2OTcuMzgxIDY2LjU5ODlDNjg3Ljg3NyA3NS4zNDY4IDY4My4wODkgODYuOTAyNiA2ODMuMDg5IDEwMS4zMzhDNjgzLjA4OSAxMTUuNzc0IDY4Ny44NzcgMTI3LjM2NiA2OTcuMzgxIDEzNi4wNDJDNzA2Ljg4NSAxNDQuNjgyIDcxOS42MjggMTQ5LjAzOCA3MzUuNTA0IDE0OS4wMzhDNzQ3Ljc4IDE0OS4wMzggNzU4LjI5MiAxNDcuOTk0IDc2Ny4wMDQgMTQ1LjgzNEM3NzUuNjggMTQzLjY3NCA3OTIuOTk1IDEzNy4zNzQgODA1Ljk5MSAxMzEuMjE4TDc5OS40NzUgMTg2Ljk0NVpNMTM4Ni44MSAxOTguNjgxVjMuODUxOTRIMTQ1NS4zOFYxOTguNjgxSDEzODYuODFaTTEyMTcuMDMgMTk4LjY4MUgxMTQ3LjA5VjMuODUxOTRIMTIzNC4zOEwxMjk2LjQ1IDEyMC4yMzhMMTI5Ni4wNSAzLjg1MTk0SDEzNjkuODlWMTk4LjY4MUgxMjc1LjE0TDEyMTcgODUuMjEwNlYxOTguNjgxSDEyMTcuMDNaTTEwNTcuNzQgMTk4LjY4MVYzLjg1MTk0SDExMjYuMzFWMTk4LjY4MUgxMDU3Ljc0Wk0xNTMuMjUgMTk5Ljc5N0wyNDYuNDUyIDQuNzUxOTJIMzI4LjgxOUw0MjIuNDUzIDE5OS43OTdIMzU3LjgzNEwzNDQuODM4IDE3MC43NDVIMjM2LjA0OEwyMjQuMzQ4IDE5OS43OTdIMTUzLjI4NkgxNTMuMjVaTTI1OS42NjQgMTIwLjQ5SDMyMS41NDdMMjkwLjU4NyA1NC4xNzkxTDI1OS42MjggMTIwLjQ5SDI1OS42NjRaTTgyMi41ODcgMTk4LjY4MVYzLjg1MTk0SDg5MC40ODJWNjUuODQyOUg5NjQuOTI5VjMuODUxOTRIMTAzMi44MlYxOTguNjgxSDk2NC45MjlWMTM1LjYxSDg5MC40ODJWMTk4LjY4MUg4MjIuNTg3Wk01OTMuMTk4IDE4Ni45NDVDNTc4LjMzMSAxOTMuMjA5IDU2Ni4yMzUgMTk3LjM0OSA1NTYuODM5IDE5OS40NzNDNTQ3LjQ3OSAyMDEuNTYxIDUzNi4yNDcgMjAyLjY0MSA1MjMuMjUyIDIwMi42NDFDNDg4LjM2OCAyMDIuNjQxIDQ2MC4yNTMgMTkzLjM4OSA0MzguOTA1IDE3NC44MTNDNDE3LjQ4NSAxNTYuMjM4IDQwNi44MjkgMTMxLjc5NCA0MDYuODI5IDEwMS4zNzRDNDA2LjgyOSA3MC45NTQ5IDQxNy41MjEgNDYuNDc1MyA0MzguOTA1IDI3Ljg2MzZDNDYwLjI1MyA5LjI4Nzg1IDQ4OC40MDQgMCA1MjMuMjUyIDBDNTM2LjI4MyAwIDU0Ny40NzkgMS4wNDM5OCA1NTYuODM5IDMuMTY3OTVDNTY2LjIzNSA1LjI1NTkyIDU3OC4zMzEgOS40MzE4NSA1OTMuMTk4IDE1LjY1OTdMNTk3Ljk4NiA3Mi41NzQ4QzU4NS4wMjcgNjYuNDE4OSA1NjkuNDAzIDU4Ljg5NTEgNTYwLjcyNyA1Ni43MzUxQzU1Mi4wMTUgNTQuNTc1MSA1NDEuNTAzIDUzLjUzMTEgNTI5LjIyNyA1My41MzExQzUxMy4zMTYgNTMuNTMxMSA1MDAuNjA4IDU3Ljg4NzEgNDkxLjEwNCA2Ni41OTg5QzQ4MS42IDc1LjM0NjggNDc2LjgxMiA4Ni45MDI2IDQ3Ni44MTIgMTAxLjMzOEM0NzYuODEyIDExNS43NzQgNDgxLjYgMTI3LjM2NiA0OTEuMTA0IDEzNi4wNDJDNTAwLjYwOCAxNDQuNjgyIDUxMy4zNTIgMTQ5LjAzOCA1MjkuMjI3IDE0OS4wMzhDNTQxLjUwMyAxNDkuMDM4IDU1Mi4wMTUgMTQ3Ljk5NCA1NjAuNzI3IDE0NS44MzRDNTY5LjQwMyAxNDMuNjc0IDU4Ni43NTUgMTM3LjM3NCA1OTkuNzE0IDEzMS4yMThMNTkzLjE5OCAxODYuOTQ1WiIgZmlsbD0iYmxhY2siPjwvcGF0aD4KPC9zdmc+"
  },
  "truckvan": {
    label: "Truckvan",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzIiBoZWlnaHQ9IjQyIiB2aWV3Qm94PSIwIDAgMTQzIDQyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMCAyMC43NThWNDEuNTE2MUg3MS41SDE0M1YyMC43NThWLTEuNjM5MTNlLTA1SDcxLjVIMFYyMC43NThaTTE0MS40NjIgMjAuOTUwM1YzOS45Nzg1SDcxLjVIMS41Mzc2M1YyMC45NTAzVjEuOTIyMDNINzEuNUgxNDEuNDYyVjIwLjk1MDNaIiBmaWxsPSJibGFjayI+PC9wYXRoPgo8cGF0aCBkPSJNMi45NTk5NCAzLjM0NDE1QzIuODA2MTggMy40NTk0OCAyLjY5MDg2IDExLjQxNjcgMi42OTA4NiAyMS4wMjY5VjM4LjQ0MDdINzEuMzA3OEgxMzkuOTI1VjIwLjc1NzlWMy4wNzUwN0g3MS41NzY5QzMzLjk4MTcgMy4wNzUwNyAzLjA3NTI3IDMuMTkwMzkgMi45NTk5NCAzLjM0NDE1Wk0xMzUuODUgNy4xNDk4QzEzNy4yNzIgOC41MzM2NyAxMzYuMTE5IDExLjE0NzYgMTM0LjEyIDExLjE0NzZDMTMyLjk2NyAxMS4xNDc2IDEzMS44NTIgOS45NTU5OCAxMzEuODUyIDguNjg3NDNDMTMxLjg1MiA2Ljg0MjI3IDEzNC41NDMgNS44MDQzNyAxMzUuODUgNy4xNDk4Wk02Mi45NjYxIDEyLjUzMTVDNjMuNzM0OSAxMi43NjIyIDYzLjgxMTggMTMuMDMxMiA2My44MTE4IDE0Ljk5MTdWMTcuMjIxM0w2Mi4zNTExIDE3LjAyOTFDNjAuNTgyOCAxNi43OTg1IDU5LjgxNCAxNy40MTM1IDU5LjE5ODkgMTkuNTI3OEM1OC42OTkyIDIxLjMzNDUgNTguNjk5MiAyMi4xMDMzIDU5LjIzNzQgMjMuOTQ4NUM1OS43MzcxIDI1Ljg3MDUgNjEuMDgyNSAyNi43NTQ2IDYyLjY1ODYgMjYuMjE2NUw2My44MTE4IDI1Ljc5MzZWMjguMjE1NEM2My44MTE4IDMwLjQ0NSA2My43MzQ5IDMwLjY3NTYgNjIuOTY2MSAzMC45MDYyQzU3LjczODIgMzIuMjkwMSA1My40MzI4IDI4LjEzODUgNTMuNDMyOCAyMS43NTczQzUzLjQzMjggMTUuMzM3NyA1Ny43NzY2IDExLjE0NzYgNjIuOTY2MSAxMi41MzE1Wk0xOC40NTE2IDE0Ljk5MTdWMTcuMjk4MkgxNi45MTRIMTUuMzc2M1YyNC4wMjUzVjMwLjc1MjVIMTIuNjg1NUg5Ljk5NDYyVjI0LjAyNTNWMTcuMjk4Mkg4LjY0OTE5SDcuMzAzNzZWMTQuOTkxN1YxMi42ODUzSDEyLjg3NzdIMTguNDUxNlYxNC45OTE3Wk0zMC4wOTkyIDEzLjIyMzVDMzIuMTM2NiAxNC4wNjkyIDMzLjQ0MzUgMTUuOTE0MyAzMy40NDM1IDE3LjkxMzJDMzMuNDQzNSAxOS45NTA2IDMyLjk4MjMgMjEuMDI2OSAzMS41OTg0IDIyLjE4MDJMMzAuNTk4OSAyMy4wMjU5TDMyLjIxMzQgMjYuNjAwOUMzMy4wOTc2IDI4LjU2MTQgMzMuODI4IDMwLjI5MTIgMzMuODI4IDMwLjQ0NUMzMy44MjggMzAuNjM3MiAzMi42MzYzIDMwLjc1MjUgMzEuMTc1NSAzMC43NTI1SDI4LjUyMzFMMjcuNTYyMSAyNy45NDYzTDI2LjYwMTEgMjUuMTc4NkwyNi41NjI2IDI3Ljk0NjNMMjYuNTI0MiAzMC43NTI1SDIzLjgzMzNIMjEuMTQyNVYyMS43MTg5VjEyLjY4NTNIMjQuOTg2NkMyNy4zNjk5IDEyLjY4NTMgMjkuMzMwNCAxMi44Nzc1IDMwLjA5OTIgMTMuMjIzNVpNNDEuOTAwNSAxOC43OTc0QzQxLjkwMDUgMjIuMTgwMiA0Mi4wMTU5IDI1LjE3ODYgNDIuMTMxMiAyNS41MjQ1QzQyLjQzODcgMjYuMzMxOCA0My42Njg4IDI2LjMzMTggNDMuOTc2MyAyNS41MjQ1QzQ0LjA5MTcgMjUuMTc4NiA0NC4yMDcgMjIuMTgwMiA0NC4yMDcgMTguNzk3NFYxMi42ODUzSDQ2LjcwNTZINDkuMjA0M1YxOS45MTIyQzQ5LjIwNDMgMjguMDYxNiA0OC44OTY4IDI5LjIxNDkgNDYuNDc1IDMwLjQ0NUM0NC43NDUyIDMxLjMyOTEgNDEuMzYyNCAzMS4zMjkxIDM5LjYzMjUgMzAuNDQ1QzM3LjIxMDcgMjkuMjE0OSAzNi45MDMyIDI4LjA2MTYgMzYuOTAzMiAxOS45MTIyVjEyLjY4NTNIMzkuNDAxOUg0MS45MDA1VjE4Ljc5NzRaTTc0LjIyOTMgMTYuMDI5NlYxOS40MTI0TDc1LjQ1OTQgMTYuMDY4MUw3Ni42ODk1IDEyLjY4NTNINzkuMzAzNUM4MC43MjU4IDEyLjY4NTMgODEuODc5IDEyLjgzOSA4MS44NzkgMTMuMDMxMkM4MS44NzkgMTMuMjIzNSA4MS4xMTAyIDE1LjEwNzEgODAuMTQ5MiAxNy4yNTk3TDc4LjQxOTQgMjEuMTQyM0w3OS42MTEgMjQuMTAyMkM4MC4yNjQ1IDI1Ljc1NTIgODEuMTQ4NyAyNy45MDc5IDgxLjUzMzEgMjguOTA3M0w4Mi4yNjM0IDMwLjc1MjVINzkuMzgwNEg3Ni41MzU4TDc1LjM4MjUgMjcuMTc3NUw3NC4yNjc3IDIzLjY0MDlMNzQuMjI5MyAyNy4xNzc1TDc0LjE5MDkgMzAuNzUyNUg3MS41SDY4LjgwOTFWMjEuNzE4OVYxMi42ODUzSDcxLjVINzQuMTkwOUw3NC4yMjkzIDE2LjAyOTZaTTkwLjUyODIgMTYuOTkwN0M5MS41Mjc3IDIzLjcxNzggOTEuNjQzIDIzLjc5NDcgOTIuNDExOCAxOC42MDUyQzkzLjMzNDQgMTIuMTg1NiA5My4wMjY5IDEyLjY4NTMgOTUuOTQ4NCAxMi42ODUzQzk3LjcxNjcgMTIuNjg1MyA5OC40MDg2IDEyLjgzOSA5OC40MDg2IDEzLjE4NUM5OC40MDg2IDEzLjQ1NDEgOTcuNTYyOSAxNy40NTE5IDk2LjQ4NjYgMjIuMDY0OUM5NS40NDg3IDI2LjY3NzggOTQuNTY0NSAzMC41MjE4IDk0LjU2NDUgMzAuNTk4N0M5NC41NjQ1IDMwLjcxNCA5My4yMTkxIDMwLjc1MjUgOTEuNjA0NiAzMC42NzU2TDg4LjY0NDYgMzAuNTYwM0w4Ni43OTk1IDIyLjQ4NzdDODUuOCAxOC4wMjg2IDg0Ljg3NzQgMTQuMDMwNyA4NC43NjIxIDEzLjUzMUM4NC41Njk5IDEyLjcyMzcgODQuNjQ2OCAxMi42ODUzIDg3LjE4MzkgMTIuNjg1M0g4OS44MzYzTDkwLjUyODIgMTYuOTkwN1pNMTEwLjg2MyAxMy4zMzg4QzExMS4xNzEgMTQuMzM4MiAxMTQuNTU0IDI5Ljk4MzcgMTE0LjU1NCAzMC40MDY1QzExNC41NTQgMzAuNTk4NyAxMTMuNDM5IDMwLjc1MjUgMTEyLjA5NCAzMC43NTI1SDEwOS42MzNMMTA5LjQwMyAyOS40MDcxQzEwOS4xNzIgMjguMTc2OSAxMDkuMDE4IDI4LjA2MTYgMTA3Ljg2NSAyOC4wNjE2QzEwNi42NzMgMjguMDYxNiAxMDYuNTU4IDI4LjE3NjkgMTA2LjMyNyAyOS40MDcxTDEwNi4wNTggMzAuNzUyNUgxMDMuNTk4QzEwMi4yMTQgMzAuNzUyNSAxMDEuMDk5IDMwLjU5ODcgMTAxLjA5OSAzMC40MDY1QzEwMS4wOTkgMjkuOTgzNyAxMDQuNDgyIDE0LjMzODIgMTA0Ljc5IDEzLjMzODhDMTA0Ljk0NCAxMi44MDA2IDEwNS40ODIgMTIuNjg1MyAxMDcuODI3IDEyLjY4NTNDMTEwLjE3MiAxMi42ODUzIDExMC43MSAxMi44MDA2IDExMC44NjMgMTMuMzM4OFpNMTI0Ljc3OSAxNi42MDYyTDEyNS44OTQgMjAuNTY1N0wxMjYuMDA5IDE2LjYwNjJMMTI2LjEyNCAxMi42ODUzSDEyOC41ODVIMTMxLjA4M1YyMS43MTg5VjMwLjc1MjVIMTI4LjQzMUgxMjUuNzRMMTI0LjYyNSAyNy4xNzc1TDEyMy40NzIgMjMuNjQwOUwxMjMuNDM0IDI3LjE3NzVMMTIzLjM5NSAzMC43NTI1SDEyMC44OTdIMTE4LjM5OFYyMS43MTg5VjEyLjY4NTNIMTIxLjA1SDEyMy43MDNMMTI0Ljc3OSAxNi42MDYyWiIgZmlsbD0iYmxhY2siPjwvcGF0aD4KPHBhdGggZD0iTTEzMy4wODIgNy43NjQ4NEMxMzIuMDgzIDguNzY0MyAxMzIuODEzIDEwLjM3ODggMTM0LjI3NCAxMC4zNzg4QzEzNC44ODkgMTAuMzc4OCAxMzQuOTI3IDEwLjMwMTkgMTM0LjU0MyA5LjgwMjJDMTM0LjEyIDkuMzAyNDcgMTMzLjk2NiA5LjMwMjQ3IDEzMy43MzYgOS42ODY4OEMxMzMuNTA1IDkuOTk0NDEgMTMzLjM5IDkuNzI1MzIgMTMzLjM5IDguOTE4MDZDMTMzLjM5IDcuODQxNzIgMTMzLjUwNSA3LjY4Nzk1IDEzNC4zODkgNy42ODc5NUMxMzUuMTk3IDcuNjg3OTUgMTM1LjM1IDcuODQxNzIgMTM1LjE5NyA4LjQxODMzQzEzNS4xMiA4LjgwMjc0IDEzNS4xOTcgOS4zNzkzNSAxMzUuMzg5IDkuNjQ4NDRDMTM1LjYxOSAxMC4wMzI4IDEzNS42OTYgOS43NjM3NiAxMzUuNjE5IDguODQxMThDMTM1LjUwNCA3LjcyNjQgMTM1LjM1IDcuNDU3MzEgMTM0LjU0MyA3LjM4MDQzQzEzNC4wMDUgNy4zMDM1NSAxMzMuMzUxIDcuNDk1NzUgMTMzLjA4MiA3Ljc2NDg0WiIgZmlsbD0iYmxhY2siPjwvcGF0aD4KPHBhdGggZD0iTTI2LjUyNDIgMTguNjQzNkMyNi41MjQyIDIwLjY4MSAyNi41NjI3IDIwLjc1NzkgMjcuMjkzIDIwLjM3MzRDMjguNTYxNiAxOS43MiAyOC4xNzcyIDE2LjUyOTQgMjYuODMxOCAxNi41Mjk0QzI2LjY3OCAxNi41Mjk0IDI2LjUyNDIgMTcuNDkwNCAyNi41MjQyIDE4LjY0MzZaIiBmaWxsPSJibGFjayI+PC9wYXRoPgo8cGF0aCBkPSJNMTA3LjQwNCAyMS40MTEzQzEwNy4wMTkgMjQuMTQwNiAxMDcuMDE5IDI0LjIxNzUgMTA3LjgyNyAyNC4yMTc1QzEwOC42MzQgMjQuMjE3NSAxMDguNjcyIDI0LjEwMjIgMTA4LjMyNiAyMS45ODhDMTA4LjE3MyAyMC43OTYzIDEwNy45NDIgMTkuNTI3NyAxMDcuOTAzIDE5LjIyMDJDMTA3LjgyNyAxOC45MTI3IDEwNy42MzQgMTkuOTEyMiAxMDcuNDA0IDIxLjQxMTNaIiBmaWxsPSJibGFjayI+PC9wYXRoPgo8L3N2Zz4="
  },
  "sansuy": {
    label: "Sansuy",
    src: "data:image/webp;base64,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"
  },
  "forza": {
    label: "Forza",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ5IiBoZWlnaHQ9IjczIiB2aWV3Qm94PSIwIDAgMTQ5IDczIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjM1MF82NTYpIj4KPHBhdGggZD0iTTE0MS4yMzMgMjEuNzA2M0wxMy4xODQ3IDBMMCA1NS4wMTgyTDQ4LjgwNTcgNjQuMzI5NEwxNDEuMjMzIDIxLjcwNjNaIiBmaWxsPSIjNjQ2NDYzIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNDUuNTA5IDEzLjI1OUg0LjQ2OTczVjU5LjYwNjZIMTQ1LjUwOVYxMy4yNTlaIiBmaWxsPSIjMDQwNDA2Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xNDguMTkxIDU5LjYwNjdIMS43NzM0NFY3M0gxNDguMTkxVjU5LjYwNjdaIiBmaWxsPSIjRUZFRkVGIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNC41OTk2IDUwLjQ3NDVIMjEuMTk5NFY0MC4wMTYxSDMwLjg5OFYzNC4zMTAySDIxLjE5OTRWMjguMzIxMkgzMi42NDFWMjIuNDgxMkgxNC41OTk2VjUwLjQ3NDVaIiBmaWxsPSIjRkVGRkZGIj48L3BhdGg+CjxwYXRoIGQ9Ik00Ny4xOTY0IDIxLjU3MjNDNDUuMjAwMSAyMS41NzIzIDQzLjQ0MjEgMjEuOTQ0NyA0MS45MjI1IDIyLjY4OTZDNDAuNzc1NCAyMy4yNDA4IDM5LjcxNzYgMjQuMDc1MSAzOC43NDkzIDI1LjIyMjNDMzcuNzgwOSAyNi4zNjk0IDM3LjAyMTEgMjcuNjM1NyAzNi40Njk5IDI5LjA2NTlDMzUuNzI1IDMxLjAwMjcgMzUuMzUyNSAzMy40MDEyIDM1LjM1MjUgMzYuMjYxN0MzNS4zNTI1IDQwLjczMSAzNi40MjUyIDQ0LjIzMjEgMzguNTg1NCA0Ni43Nzk2QzQwLjczMDcgNDkuMzI3MiA0My42MzU4IDUwLjU5MzUgNDcuMjcwOSA1MC41OTM1QzUwLjkwNiA1MC41OTM1IDUzLjc1MTUgNDkuMzEyMyA1NS44OTY4IDQ2Ljc0OThDNTguMDQyMSA0NC4xODc0IDU5LjEyOTcgNDAuNjQxNyA1OS4xMjk3IDM2LjExMjdDNTkuMTI5NyAzMS41ODM3IDU4LjA0MjEgMjcuOTc4NCA1NS44ODE5IDI1LjQxNTlDNTMuNzIxNyAyMi44NTM1IDUwLjgzMTUgMjEuNTcyMyA0Ny4yMTEzIDIxLjU3MjNINDcuMTk2NFpNNDMuNDI3MiA0MS43MTQzQzQyLjQyOTEgNDAuNDMzMSA0MS45MjI1IDM4LjU1NTkgNDEuOTIyNSAzNi4wNjhDNDEuOTIyNSAzMy41OCA0Mi40MTQyIDMxLjY1ODIgNDMuMzgyNSAzMC40MDY4QzQ0LjM1MDkgMjkuMTU1MyA0NS42NDcgMjguNTI5NiA0Ny4yMjYyIDI4LjUyOTZDNDguODA1NCAyOC41Mjk2IDUwLjEwMTUgMjkuMTQwNCA1MS4wNTUgMzAuMzc3QzUyLjAyMzQgMzEuNjEzNSA1Mi41MDAxIDMzLjQ5MDYgNTIuNTAwMSAzNS45OTM1QzUyLjUwMDEgMzguNDk2MyA1Mi4wMDg1IDQwLjQ0OCA1MS4wMjUyIDQxLjcxNDNDNTAuMDQxOSA0Mi45ODA2IDQ4Ljc3NTYgNDMuNjIxMiA0Ny4yMjYyIDQzLjYyMTJDNDUuNjc2OCA0My42MjEyIDQ0LjQxMDUgNDIuOTgwNiA0My40MTIzIDQxLjY5OTRMNDMuNDI3MiA0MS43MTQzWiIgZmlsbD0iI0ZFRkZGRiI+PC9wYXRoPgo8cGF0aCBkPSJNMTI3LjUyNiAyMi40ODEySDEyNi4yNkgxMjAuNjczSDExOS4yODhMMTExLjQ1MSA1MC40NzQ1SDExNy43OThMMTE5LjQ2NiA0NC4xMTNIMTI3LjM3N0wxMjkuMDQ2IDUwLjQ3NDVIMTM1LjM5MkwxMjcuNTU2IDIyLjQ4MTJIMTI3LjUyNlpNMTIwLjY4OCAzOS4zOTA0TDEyMy4zOTkgMjkuMDA2NUwxMjYuMTExIDM5LjM5MDRIMTIwLjY3M0gxMjAuNjg4WiIgZmlsbD0iI0ZFRkZGRiI+PC9wYXRoPgo8cGF0aCBkPSJNODcuNzAzNCAyNy4yMDM5VjI4LjMwNjNIOTkuMTc0OEw4Ni45Mjg3IDQ1LjM2NDVWNTAuNDc0NUgxMDcuMjM1VjQ1Ljc1MThWNDQuMjAyNEg5Ny4wODkxTDEwNy43NzEgMjguNzM4M1YyMi40ODEySDg3LjcwMzRWMjcuMjAzOVoiIGZpbGw9IiNGRUZGRkYiPjwvcGF0aD4KPHBhdGggZD0iTTc5LjA5MjQgMzkuNDc5OEg3OS4xMDczTDc4LjkxMzYgMzkuMjExNkM3OC45MTM2IDM5LjIxMTYgODMuOTY0IDM2LjM4MSA4NC4wOTgxIDMwLjk4NzlDODQuMDgzMiAyOS44ODU1IDgzLjgxNSAyOC43ODMgODMuMzIzNCAyNy43ODQ5QzgyLjIwNiAyNS41MzUzIDc5Ljc0NzkgMjIuNTg1NSA3NC41MTg3IDIyLjQ5NjFDNzQuNDQ0MiAyMi40ODEyIDc0LjM1NDggMjIuNDgxMiA3NC4yNjU0IDIyLjQ4MTJINjIuNjc0OFY1MC40NzQ1SDY5Ljc2NjJWMzkuNzQ3OUM3MC44OTg1IDM5Ljk1NjUgNzQuNzcxOSA0MS4zNzE4IDc2LjQ1NTQgNTAuNDc0NUg4My40NDI2QzgzLjQ0MjYgNDQuNTMwMiA3OS4wNjI2IDM5LjQ5NDcgNzkuMDYyNiAzOS40OTQ3Qzc5LjA3NzUgMzkuNDk0NyA3OS4wNzc1IDM5LjQ3OTggNzkuMDkyNCAzOS40Nzk4Wk03My42NTQ2IDM0LjMxMDJINzMuNjI0OEM3My4xMTgzIDM0LjMxMDIgNzIuNTUyMiAzNC4zMTAyIDcxLjkyNjQgMzQuMzEwMkg2OS43NjYyVjI4LjcyMzRINzMuNTIwNUM3My41MjA1IDI4LjcyMzQgNzYuMDgzIDI4LjcyMzQgNzYuMDgzIDMxLjQ5NDVDNzYuMDgzIDMzLjg3ODEgNzQuMTc2IDM0LjI1MDYgNzMuNjU0NiAzNC4yOTUzVjM0LjMxMDJaIiBmaWxsPSIjRkVGRkZGIj48L3BhdGg+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjM1MF82NTYiPgo8cmVjdCB3aWR0aD0iMTQ4LjE5IiBoZWlnaHQ9IjczIiBmaWxsPSJ3aGl0ZSI+PC9yZWN0Pgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg=="
  },
  "autoavaliar": {
    label: "AutoAvaliar",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjgzIiB2aWV3Qm94PSIwIDAgMzI0IDgzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjg5LjI1MyAyOS40OTY4QzI5My40MjcgMjkuNDcxOCAyOTMuNDI3IDI5LjQ3MTggMjk3LjY4NiAyOS40NDYzQzI5OC41NiAyOS40Mzg5IDI5OS40MzUgMjkuNDMxNiAzMDAuMzM1IDI5LjQyNEMzMDEuNDE0IDI5LjQyMDMgMzAxLjQxNCAyOS40MjAzIDMwMS45MjEgMjkuNDE5N0MzMDIuMjcxIDI5LjQxODQgMzAyLjYyIDI5LjQxNTYgMzAyLjk3IDI5LjQxMTVDMzA2LjQ5MSAyOS4zNzE5IDMwOS4yOTIgMjkuOTY3NyAzMTEuOTI2IDMyLjQ3NjFDMzE0LjExOSAzNC43NzkzIDMxNS4yMDIgMzcuNjU1NCAzMTUuMTQ5IDQwLjgzNzNDMzE0LjkyNyA0My45MDU2IDMxMy43NTUgNDYuNzgyOSAzMTEuNDcyIDQ4Ljg4NzdDMzExLjAxMiA0OS4yNTY1IDMxMC41NTQgNDkuNTc3NCAzMTAuMDU4IDQ5Ljg5NzZDMzEwLjg0OSA1MS4xMDI4IDMxMS42NjkgNTIuMjgxMiAzMTIuNTE5IDUzLjQ0NUMzMTMuNDkxIDU0Ljc4MTIgMzE0LjQ0MiA1Ni4xMjkxIDMxNS4zNzIgNTcuNDk0M0MzMTUuNDU1IDU3LjYxNjkgMzE1LjUzOSA1Ny43Mzk2IDMxNS42MjUgNTcuODY1OUMzMTUuNzA1IDU3Ljk4NDIgMzE1Ljc4NSA1OC4xMDI1IDMxNS44NjggNTguMjI0NEMzMTYuMDQzIDU4LjQ3NTQgMzE2LjIyMiA1OC43MjMgMzE2LjQwNSA1OC45Njc5QzMxNy4xMjcgNTkuOTM3IDMxNy4xMjcgNTkuOTM3IDMxNy4xMjcgNjAuNjAzQzMxMC41NzcgNjEuMTczMSAzMTAuNTc3IDYxLjE3MzEgMzA4Ljg3NiA2MC4zMTEzQzMwOC4wMTMgNTkuNTM3MyAzMDcuNTU0IDU4LjU1NzEgMzA3LjA5IDU3LjUxMDFDMzA2LjYxMiA1Ni41Mjc3IDMwNS45NDIgNTUuNjc1MiAzMDUuMjk4IDU0Ljc5NThDMzA1LjA2NiA1NC40NjUyIDMwNC44MzQgNTQuMTMzOCAzMDQuNjAzIDUzLjgwMTdDMzA0LjUwNiA1My42NjE5IDMwNC40MDggNTMuNTIyMiAzMDQuMzA4IDUzLjM3ODJDMzAzLjk5OCA1Mi45Mjc0IDMwMy45OTggNTIuOTI3NCAzMDMuNjYxIDUyLjI3N0MzMDMuMjI3IDUxLjY0MTEgMzAzLjIyNyA1MS42NDExIDMwMi40MzEgNTEuNTU5NEMzMDIuMTI4IDUxLjU1MTMgMzAxLjgyNCA1MS41NDkzIDMwMS41MjEgNTEuNTUzQzMwMS4zNzggNTEuNTUwMiAzMDEuMjM2IDUxLjU0NzUgMzAxLjA5IDUxLjU0NDZDMzAwLjU2MSA1MS41MzYyIDMwMC4wMzMgNTEuNTM4MSAyOTkuNTA0IDUxLjUzODhDMjk4LjMyMSA1MS41MzA0IDI5Ny4xMzggNTEuNTIyMSAyOTUuOTE5IDUxLjUxMzVDMjk1LjkxOSA1NC41MTMxIDI5NS45MTkgNTcuNTEyNiAyOTUuOTE5IDYwLjYwM0MyOTMuNzE5IDYwLjYwMyAyOTEuNTE5IDYwLjYwMyAyODkuMjUzIDYwLjYwM0MyODkuMjUzIDUwLjMzNzkgMjg5LjI1MyA0MC4wNzI5IDI4OS4yNTMgMjkuNDk2OFpNMjk1LjkxOSAzNi4xNjI0QzI5NS45MTkgMzguOTYyIDI5NS45MTkgNDEuNzYxNSAyOTUuOTE5IDQ0LjY0NTlDMjk3LjIxMiA0NC42NjQ1IDI5OC41MDYgNDQuNjgwNiAyOTkuOCA0NC42OTAzQzMwMC4yMzkgNDQuNjk0MyAzMDAuNjc5IDQ0LjY5OTkgMzAxLjExOCA0NC43MDY5QzMwMS43NTIgNDQuNzE2NyAzMDIuMzg2IDQ0LjcyMTMgMzAzLjAyIDQ0LjcyNDhDMzAzLjIxNSA0NC43MjkgMzAzLjQxIDQ0LjczMzIgMzAzLjYxIDQ0LjczNzVDMzA1LjA1NyA0NC43Mzc5IDMwNi4xMTMgNDQuNDI4NyAzMDcuMjM1IDQzLjQ5OTVDMzA4LjEzNiA0Mi40MDc1IDMwOC40OTkgNDEuNDQ2OCAzMDguNDI5IDQwLjAxMjhDMzA4LjI2IDM4LjcwNDYgMzA3LjY2OSAzNy44MjUxIDMwNi43NjMgMzYuODk0NkMzMDUuNDUxIDM2LjEwMTQgMzA0LjAzMyAzNi4xMDU5IDMwMi41NDYgMzYuMTIyOUMzMDIuMzU2IDM2LjEyMzUgMzAyLjE2NSAzNi4xMjQxIDMwMS45NjkgMzYuMTI0N0MzMDEuMzY2IDM2LjEyNjkgMzAwLjc2MyAzNi4xMzIgMzAwLjE2IDM2LjEzNzJDMjk5Ljc0OSAzNi4xMzkyIDI5OS4zMzggMzYuMTQxIDI5OC45MjcgMzYuMTQyN0MyOTcuOTI0IDM2LjE0NjggMjk2LjkyMSAzNi4xNTQ3IDI5NS45MTkgMzYuMTYyNFoiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTEyNy4wNTUgMzIuMTIxN0MxMjcuMTk1IDMyLjIyNjYgMTI3LjMzNiAzMi4zMzE1IDEyNy40OCAzMi40Mzk2QzEzMC4zNTcgMzQuNzE5NiAxMzIuMjU2IDM4LjYzNDEgMTMyLjcxMSA0Mi4yMjExQzEzMy4wNzMgNDYuODM0NSAxMzIuMzgxIDUxLjEwMTMgMTI5LjQ5MSA1NC44MzI3QzEyOS4yMjIgNTUuMTQzOSAxMjguOTQ5IDU1LjQ1MTMgMTI4LjY3MSA1NS43NTQzQzEyOC41MzQgNTUuOTA5MiAxMjguMzk4IDU2LjA2NDIgMTI4LjI1NyA1Ni4yMjM4QzEyNS45MjEgNTguNzM0OSAxMjIuNDM0IDYwLjUzMjIgMTE4Ljk3MiA2MC42NjI4QzExNC42NzQgNjAuNzExNiAxMTEuMDkgNTkuNzE0NSAxMDcuODY2IDU2Ljc2NDNDMTA3LjY1OSA1Ni41ODU0IDEwNy42NTkgNTYuNTg1NCAxMDcuNDQ5IDU2LjQwMjlDMTA0Ljg0NiA1NC4wMDkxIDEwMy4wNDkgNTAuMjM3IDEwMi43NzIgNDYuNzA1NUMxMDIuNTg0IDQxLjg3OTMgMTAzLjQyMyAzNy42NzE5IDEwNi42NTQgMzMuOTM5NkMxMDYuOCAzMy43Mzk2IDEwNi45NDYgMzMuNTM5NiAxMDcuMDk2IDMzLjMzMzZDMTEyLjE3OCAyNy4zNzcxIDEyMS4yNzcgMjcuNDQ5NiAxMjcuMDU1IDMyLjEyMTdaTTExMS4yMTEgMzguNzI2NUMxMDkuNTI5IDQxLjIwNDIgMTA4Ljg4NCA0My42ODY0IDEwOS4zODEgNDYuNjY0QzExMC4wMTkgNDkuMjIwOCAxMTEuMjU4IDUxLjMxNTMgMTEzLjU1NyA1Mi43MDk1QzExNS42MzUgNTMuNzcyNSAxMTcuNzI3IDU0LjA4NTggMTIwLjAyOSA1My41OTY0QzEyMS4yNiA1My4xODAyIDEyMi4yNDUgNTIuNTY5IDEyMy4yMTcgNTEuNzE0NUMxMjMuNDAxIDUxLjU2MjYgMTIzLjQwMSA1MS41NjI2IDEyMy41ODggNTEuNDA3NkMxMjUuMjM5IDQ5LjkyNjMgMTI2LjEzNiA0Ny43NjE3IDEyNi4yOTcgNDUuNTgwN0MxMjYuMzkzIDQyLjY2OTMgMTI1LjYzIDQwLjE0NSAxMjMuNjQ2IDM3Ljk2NjdDMTIxLjk4OSAzNi40MTQzIDEyMC4wMzYgMzUuNjc1NSAxMTcuODAxIDM1LjQ5MjNDMTE1LjIwNiAzNS41ODUgMTEyLjg0OSAzNi42OTg4IDExMS4yMTEgMzguNzI2NVoiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTQ1LjQ1MjggMjkuNDk2NkM0Ny41ODU4IDI5LjQ5NjYgNDkuNzE4OCAyOS40OTY2IDUxLjkxNjQgMjkuNDk2NkM1MS45MTk0IDMwLjAxNjIgNTEuOTIyMyAzMC41MzU5IDUxLjkyNTMgMzEuMDcxM0M1MS45MzU1IDMyLjc5NTggNTEuOTQ5IDM0LjUyMDIgNTEuOTY0IDM2LjI0NDdDNTEuOTczIDM3LjI4OTQgNTEuOTgxIDM4LjMzNCA1MS45ODY0IDM5LjM3ODdDNTEuOTkxNyA0MC4zODg1IDUxLjk5OTggNDEuMzk4MyA1Mi4wMSA0Mi40MDhDNTIuMDEzMyA0Mi43OTE2IDUyLjAxNTcgNDMuMTc1MiA1Mi4wMTY5IDQzLjU1ODlDNTIuMDI4MiA0Ni42NDUzIDUyLjEyOCA0OS4zMTI3IDU0LjI5NjEgNTEuNzA5QzU1LjU3ODkgNTIuOTQ5NyA1Ny4xMDUzIDUzLjU1NTUgNTguODg1IDUzLjYzNDJDNjAuNzMwNiA1My41NTUyIDYyLjUzMyA1Mi44NDI2IDYzLjgzMzcgNTEuNTEzM0M2NS43NTE0IDQ4Ljk5NDMgNjUuNzQ1MyA0Ni4zNzMyIDY1Ljc1NSA0My4zNDM4QzY1Ljc1ODQgNDIuOTQzNyA2NS43NjIxIDQyLjU0MzUgNjUuNzY2IDQyLjE0MzRDNjUuNzc1NSA0MS4wOTYxIDY1Ljc4MTYgNDAuMDQ4OCA2NS43ODY5IDM5LjAwMTRDNjUuNzkyOSAzNy45MzAzIDY1LjgwMjMgMzYuODU5MyA2NS44MTE0IDM1Ljc4ODJDNjUuODI4NyAzMy42OTEgNjUuODQyIDMxLjU5MzggNjUuODUzNiAyOS40OTY2QzY3Ljk4NjYgMjkuNDk2NiA3MC4xMTk2IDI5LjQ5NjYgNzIuMzE3MiAyOS40OTY2QzcyLjMzNTYgMzEuOTE2NCA3Mi4zNTA0IDM0LjMzNjEgNzIuMzU5MSAzNi43NTU5QzcyLjM2MzMgMzcuODc5OCA3Mi4zNjkgMzkuMDAzNyA3Mi4zNzgyIDQwLjEyNzZDNzIuMzg3MSA0MS4yMTQ2IDcyLjM5MTggNDIuMzAxNiA3Mi4zOTM5IDQzLjM4ODdDNzIuMzk1NCA0My44MDEgNzIuMzk4MyA0NC4yMTMzIDcyLjQwMjcgNDQuNjI1NUM3Mi40NDg1IDQ5LjEwNDMgNzEuNjgzMiA1My4wNTA1IDY4LjQ3NjggNTYuMzc0NUM2OC4yMTA3IDU2LjY0MTYgNjcuOTQxMiA1Ni45MDU1IDY3LjY3MTUgNTcuMTY5QzY3LjU1ODUgNTcuMjg4NSA2Ny40NDU1IDU3LjQwOCA2Ny4zMjkxIDU3LjUzMTJDNjUuMTY4OCA1OS42NDA1IDYxLjgzMjggNjAuNTcyNiA1OC45MTAzIDYwLjY5MTJDNTUuMDQ0NSA2MC41Nzg0IDUxLjcyNjMgNTguOTI2NyA0OS4wODg2IDU2LjE1OTFDNDYuNTcyMiA1My40NDY2IDQ1LjQxNDIgNDkuODg4IDQ1LjQyOTggNDYuMjM2MUM0NS40Mjk4IDQ2LjA1NDcgNDUuNDI5OCA0NS44NzMyIDQ1LjQyOTggNDUuNjg2M0M0NS40Mjk5IDQ1LjA4OTYgNDUuNDMxNSA0NC40OTI5IDQ1LjQzMyA0My44OTYyQzQ1LjQzMzQgNDMuNDgxMyA0NS40MzM3IDQzLjA2NjMgNDUuNDMzOSA0Mi42NTE0QzQ1LjQzNDcgNDEuNTYxNiA0NS40MzY3IDQwLjQ3MTggNDUuNDM4OSAzOS4zODJDNDUuNDQxIDM4LjI2OSA0NS40NDE5IDM3LjE1NiA0NS40NDI5IDM2LjA0MzFDNDUuNDQ1MSAzMy44NjA5IDQ1LjQ0ODYgMzEuNjc4NyA0NS40NTI4IDI5LjQ5NjZaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yNS44NiAyMi4wMjI5QzI2LjQ2NTkgMjIuMjI0OSAyNi40NjU5IDIyLjIyNDkgMjYuNzQyNCAyMi42NTI0QzI2LjgzNzIgMjIuODQyNCAyNi45MzE5IDIzLjAzMjMgMjcuMDI5NiAyMy4yMjhDMjcuMTM5MiAyMy40NDUzIDI3LjI0ODggMjMuNjYyNSAyNy4zNjE3IDIzLjg4NjNDMjcuNDgxNiAyNC4xMjkyIDI3LjYwMTUgMjQuMzcyIDI3LjcyMTQgMjQuNjE0OEMyNy44NDg3IDI0Ljg2OSAyNy45NzYxIDI1LjEyMzEgMjguMTAzOCAyNS4zNzcxQzI4LjQ1MDMgMjYuMDY4MSAyOC43OTQzIDI2Ljc2MDQgMjkuMTM3OCAyNy40NTI5QzI5LjQ5NzEgMjguMTc2NCAyOS44NTg2IDI4Ljg5ODggMzAuMjE5OCAyOS42MjE0QzMwLjgyNjIgMzAuODM1IDMxLjQzMSAzMi4wNDkzIDMyLjAzNDggMzMuMjY0MkMzMi43MzM2IDM0LjY3MDMgMzMuNDM0MyAzNi4wNzUzIDM0LjEzNjIgMzcuNDc5OEMzNC44ODI1IDM4Ljk3MyAzNS42Mjc0IDQwLjQ2NjggMzYuMzcyIDQxLjk2MDhDMzYuNTg3IDQyLjM5MjIgMzYuODAyMyA0Mi44MjM1IDM3LjAxNzYgNDMuMjU0OEMzNy4zNTU1IDQzLjkzMTYgMzcuNjkyNSA0NC42MDg5IDM4LjAyODggNDUuMjg2NUMzOC4xNTI2IDQ1LjUzNTcgMzguMjc2NyA0NS43ODQ3IDM4LjQwMTEgNDYuMDMzNUMzOC41NzAzIDQ2LjM3MjIgMzguNzM4NCA0Ni43MTE0IDM4LjkwNjUgNDcuMDUwN0MzOS4wMDEgNDcuMjQwNyAzOS4wOTU2IDQ3LjQzMDggMzkuMTkzIDQ3LjYyNjVDMzkuMzkzMiA0OC4wNzk1IDM5LjM5MzIgNDguMDc5NSAzOS4zOTMyIDQ4LjQ4MzRDMzYuNTkzNiA0OC40ODM0IDMzLjc5NDEgNDguNDgzNCAzMC45MDk3IDQ4LjQ4MzRDMjkuNzMyMyA0Ni4yNjkyIDI4LjU3NzEgNDQuMDQ1OCAyNy40NTA2IDQxLjgwNTJDMjcuMjc0OCA0MS40NTc0IDI3LjI3NDggNDEuNDU3NCAyNy4wOTU0IDQxLjEwMjdDMjYuOTMzIDQwLjc3ODMgMjYuOTMzIDQwLjc3ODMgMjYuNzY3MyA0MC40NDczQzI2LjY3MDIgNDAuMjUzOCAyNi41NzMgNDAuMDYwMyAyNi40NzI5IDM5Ljg2MUMyNi4yNjM5IDM5LjM5NCAyNi4yNjM5IDM5LjM5NCAyNi4yNjM5IDM4Ljk5QzI2LjEzMDYgMzguOTkgMjUuOTk3MyAzOC45OSAyNS44NiAzOC45OUMyNS44MTMzIDM5LjE0ODkgMjUuNzY2NyAzOS4zMDc5IDI1LjcxODYgMzkuNDcxN0MyNS4zNzg2IDQwLjQxNzEgMjQuOTM3MyA0MS4yOTM4IDI0LjQ4NjIgNDIuMTkwNUMyNC4zODggNDIuMzg3MyAyNC4yODk4IDQyLjU4NDIgMjQuMTg4NSA0Mi43ODdDMjMuODY0NiA0My40MzU2IDIzLjUzOTUgNDQuMDgzNyAyMy4yMTQ0IDQ0LjczMTdDMjIuOTg5IDQ1LjE4MjMgMjIuNzYzNiA0NS42MzI5IDIyLjUzODMgNDYuMDgzNkMyMi4wMDYyIDQ3LjE0NzQgMjEuNDczNCA0OC4yMTA4IDIwLjk0MDIgNDkuMjc0QzIwLjQ1MzkgNTAuMjQ0IDE5Ljk2ODQgNTEuMjE0NCAxOS40ODMyIDUyLjE4NDlDMTguOTU4MiA1My4yMzUyIDE4LjQzMjYgNTQuMjg1MSAxNy45MDY5IDU1LjMzNUMxNy42ODMxIDU1Ljc4MTkgMTcuNDU5NSA1Ni4yMjg4IDE3LjIzNTkgNTYuNjc1N0MxNi45MjQ0IDU3LjI5ODMgMTYuNjEyNCA1Ny45MjA2IDE2LjMwMDIgNTguNTQyOUMxNi4yMDcxIDU4LjcyOTEgMTYuMTE0IDU4LjkxNTQgMTYuMDE4MSA1OS4xMDcyQzE1LjkzMzUgNTkuMjc1NyAxNS44NDg4IDU5LjQ0NDIgMTUuNzYxNSA1OS42MTc4QzE1LjY4NzggNTkuNzY1IDE1LjYxNCA1OS45MTIyIDE1LjUzOCA2MC4wNjM4QzE1LjM1NjYgNjAuNDAwOCAxNS4zNTY2IDYwLjQwMDggMTUuMTU0NiA2MC42MDI4QzE0LjU0MjYgNjAuNjIwNyAxMy45MzUyIDYwLjYyNiAxMy4zMjMzIDYwLjYyMjVDMTMuMTM5NyA2MC42MjIyIDEyLjk1NjIgNjAuNjIxOSAxMi43NjcxIDYwLjYyMTZDMTIuMTc4NSA2MC42MjA1IDExLjU4OTggNjAuNjE3OSAxMS4wMDEyIDYwLjYxNTRDMTAuNjAzMSA2MC42MTQ0IDEwLjIwNTEgNjAuNjEzNCA5LjgwNzAxIDYwLjYxMjZDOC44MjkwMiA2MC42MTA0IDcuODUxMDMgNjAuNjA2OSA2Ljg3MzA1IDYwLjYwMjhDNi45OTk2OSA1OS42NjExIDcuMzg4NTUgNTguODgyNiA3LjgxMjQ3IDU4LjA0NTFDNy44ODkzNiA1Ny44OTA4IDcuOTY2MjQgNTcuNzM2NSA4LjA0NTQ1IDU3LjU3NzVDOC4zMDMyNyA1Ny4wNjA5IDguNTYyODIgNTYuNTQ1MSA4LjgyMjM2IDU2LjAyOTRDOS4wMDc1NyA1NS42NTkxIDkuMTkyNjcgNTUuMjg4OCA5LjM3NzY3IDU0LjkxODVDOS44ODAyNyA1My45MTMxIDEwLjM4NDQgNTIuOTA4NSAxMC44ODg3IDUxLjkwNEMxMS40MTU2IDUwLjg1NDEgMTEuOTQxIDQ5LjgwMzYgMTIuNDY2NiA0OC43NTMxQzEzLjQ2MjEgNDYuNzY0IDE0LjQ1ODkgNDQuNzc1NCAxNS40NTYxIDQyLjc4NzFDMTYuNTkxMyA0MC41MjM1IDE3LjcyNTEgMzguMjU5MiAxOC44NTg4IDM1Ljk5NDhDMjEuMTkxIDMxLjMzNjcgMjMuNTI0OSAyNi42Nzk2IDI1Ljg2IDIyLjAyMjlaIiBmaWxsPSIjNEI0QjRCIj48L3BhdGg+CjxwYXRoIGQ9Ik0xNTguMzY0IDIyLjIyNTFDMTU4Ljk3IDIyLjQyNzEgMTU4Ljk3IDIyLjQyNzEgMTU5LjI0MyAyMi44NDcyQzE1OS4zODIgMjMuMTI2OCAxNTkuMzgyIDIzLjEyNjggMTU5LjUyNCAyMy40MTIxQzE1OS42MzIgMjMuNjI1NCAxNTkuNzQgMjMuODM4NyAxNTkuODUxIDI0LjA1ODRDMTU5Ljk2NyAyNC4yOTQ0IDE2MC4wODQgMjQuNTMwMyAxNjAuMjA0IDI0Ljc3MzVDMTYwLjMyOSAyNS4wMjMgMTYwLjQ1NCAyNS4yNzI1IDE2MC41NzkgMjUuNTIxOUMxNjAuOTE5IDI2LjIwMDQgMTYxLjI1NyAyNi44ODAxIDE2MS41OTQgMjcuNTYwMkMxNjEuOTQ3IDI4LjI3MTEgMTYyLjMwMiAyOC45ODA5IDE2Mi42NTcgMjkuNjkwOUMxNjMuMjUzIDMwLjg4MzggMTYzLjg0OCAzMi4wNzc0IDE2NC40NDEgMzMuMjcxNkMxNjUuMTI3IDM0LjY1MjQgMTY1LjgxNiAzNi4wMzIyIDE2Ni41MDUgMzcuNDExNEMxNjcuMjM4IDM4Ljg3ODkgMTY3Ljk3IDQwLjM0NyAxNjguNzAyIDQxLjgxNTRDMTY4LjkxMyA0Mi4yMzg3IDE2OS4xMjQgNDIuNjYxOSAxNjkuMzM2IDQzLjA4NUMxNjkuNjY4IDQzLjc1MDMgMTY5Ljk5OSA0NC40MTYgMTcwLjMyOSA0NS4wODJDMTcwLjUwOSA0NS40NDMgMTcwLjY4OSA0NS44MDM2IDE3MC44NjkgNDYuMTY0MkMxNzAuOTc2IDQ2LjM3OTIgMTcxLjA4MiA0Ni41OTQyIDE3MS4xOTIgNDYuODE1NkMxNzEuMjg1IDQ3LjAwMjMgMTcxLjM3OCA0Ny4xODkgMTcxLjQ3MyA0Ny4zODEzQzE3MS42OTUgNDcuODc3NiAxNzEuNjk1IDQ3Ljg3NzYgMTcxLjg5NyA0OC42ODU2QzE2OS4wOTggNDguNjE4OSAxNjYuMjk4IDQ4LjU1MjMgMTYzLjQxNCA0OC40ODM2QzE2Mi4xMTEgNDYuMDM0NSAxNjAuODQ3IDQzLjU3MTIgMTU5LjYxNyA0MS4wODUxQzE1OS41MDkgNDAuODY4MiAxNTkuNDAyIDQwLjY1MTIgMTU5LjI5MSA0MC40Mjc3QzE1OS4xOTUgNDAuMjMzMiAxNTkuMDk5IDQwLjAzODcgMTU5IDM5LjgzODJDMTU4LjgwNSAzOS40MTEgMTU4LjgwNSAzOS40MTEgMTU4LjU2NiAzOS4xOTIxQzE1OC40NzQgMzkuMzc1NiAxNTguMzgyIDM5LjU1OTEgMTU4LjI4OCAzOS43NDgyQzE1NC44MTIgNDYuNjk5OCAxNTEuMzM2IDUzLjY1MTMgMTQ3Ljg2IDYwLjYwMjlDMTQ1LjA2MSA2MC42MDI5IDE0Mi4yNjEgNjAuNjAyOSAxMzkuMzc3IDYwLjYwMjlDMTM5LjcyMyA1OS43MzcxIDE0MC4xMDggNTguOTExNSAxNDAuNTI2IDU4LjA4QzE0MC42MzkgNTcuODU0MSAxNDAuNjM5IDU3Ljg1NDEgMTQwLjc1NCA1Ny42MjM4QzE0MS4wMDYgNTcuMTIwMSAxNDEuMjU4IDU2LjYxNjcgMTQxLjUxMSA1Ni4xMTMzQzE0MS42OTIgNTUuNzUyIDE0MS44NzMgNTUuMzkwNiAxNDIuMDUzIDU1LjAyOTNDMTQyLjQ0MyA1NC4yNTE2IDE0Mi44MzIgNTMuNDc0IDE0My4yMjIgNTIuNjk2NkMxNDMuODM3IDUxLjQ2NzkgMTQ0LjQ1MiA1MC4yMzkgMTQ1LjA2NyA0OS4wMUMxNDYuMzcyIDQ2LjQwMiAxNDcuNjc4IDQzLjc5NDQgMTQ4Ljk4NCA0MS4xODY4QzE1MC4zOTQgMzguMzcwNCAxNTEuODA1IDM1LjU1NCAxNTMuMjE0IDMyLjczNzJDMTUzLjgyNiAzMS41MTQ3IDE1NC40MzggMzAuMjkyNCAxNTUuMDUxIDI5LjA3MDJDMTU1LjQzMSAyOC4zMTEyIDE1NS44MTEgMjcuNTUxOSAxNTYuMTkxIDI2Ljc5MjZDMTU2LjM2NyAyNi40Mzk4IDE1Ni41NDQgMjYuMDg2OSAxNTYuNzIxIDI1LjczNDJDMTU2Ljk2MiAyNS4yNTM5IDE1Ny4yMDIgMjQuNzczNCAxNTcuNDQzIDI0LjI5MjhDMTU3LjU0OCAyNC4wODE5IDE1Ny41NDggMjQuMDgxOSAxNTcuNjU3IDIzLjg2NjdDMTU3LjkyNyAyMy4zMjQgMTU4LjE3MiAyMi44MDE1IDE1OC4zNjQgMjIuMjI1MVoiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTI3MC42NyAyOC42ODhDMjcwLjgwMyAyOC42ODggMjcwLjkzNyAyOC42ODggMjcxLjA3NCAyOC42ODhDMjczLjEyOSAzMi43ODg5IDI3NS4xODQgMzYuODkwNCAyNzcuMjM3IDQwLjk5MjNDMjc4LjE5IDQyLjg5NjggMjc5LjE0NCA0NC44MDExIDI4MC4wOTggNDYuNzA1MUMyODAuOTI5IDQ4LjM2NDEgMjgxLjc2IDUwLjAyMzMgMjgyLjU5MSA1MS42ODI5QzI4My4wMyA1Mi41NjIxIDI4My40NzEgNTMuNDQxMiAyODMuOTExIDU0LjMxOTlDMjg0LjMyNiA1NS4xNDYyIDI4NC43NCA1NS45NzI4IDI4NS4xNTMgNTYuNzk5OEMyODUuMzA1IDU3LjEwNCAyODUuNDU3IDU3LjQwOCAyODUuNjEgNTcuNzExOUMyODUuODE4IDU4LjEyNTQgMjg2LjAyNSA1OC41MzkzIDI4Ni4yMzEgNTguOTUzNEMyODYuMzQ3IDU5LjE4NTQgMjg2LjQ2MyA1OS40MTc0IDI4Ni41ODMgNTkuNjU2NEMyODYuODI5IDYwLjE5ODIgMjg2LjgyOSA2MC4xOTgyIDI4Ni44MjkgNjAuNjAyMkMyODQuNDMgNjAuNjAyMiAyODIuMDMgNjAuNjAyMiAyNzkuNTU4IDYwLjYwMjJDMjc2LjY5MSA1NC44Njk3IDI3My44MjUgNDkuMTM3MyAyNzAuODcyIDQzLjIzMTJDMjY5LjY5OSA0NS40NjAxIDI2OC41MzEgNDcuNjgyOSAyNjcuNDEgNDkuOTM3NEMyNjcuMTk2IDUwLjM2OSAyNjYuOTgxIDUwLjgwMDMgMjY2Ljc2NiA1MS4yMzE2QzI2Ni4zMTIgNTIuMTQxNCAyNjUuODU5IDUzLjA1MTYgMjY1LjQwNiA1My45NjE4QzI2NC44NzQgNTUuMDMwOSAyNjQuMzQxIDU2LjA5OTkgMjYzLjgwOCA1Ny4xNjg2QzI2My41OTYgNTcuNTkzMyAyNjMuMzg1IDU4LjAxODIgMjYzLjE3NCA1OC40NDMyQzI2My4wNDYgNTguNzAwMyAyNjIuOTE4IDU4Ljk1NzMgMjYyLjc4OSA1OS4yMTQ0QzI2Mi42NzggNTkuNDM5MiAyNjIuNTY2IDU5LjY2NCAyNjIuNDUgNTkuODk1NkMyNjIuMTg3IDYwLjQwMDIgMjYyLjE4NyA2MC40MDAyIDI2MS45ODUgNjAuNjAyMkMyNjEuNDYxIDYwLjYyIDI2MC45NDIgNjAuNjI1NSAyNjAuNDE4IDYwLjYyMTlDMjYwLjI2MiA2MC42MjE2IDI2MC4xMDUgNjAuNjIxMyAyNTkuOTQ0IDYwLjYyMUMyNTkuNDQyIDYwLjYxOTkgMjU4LjkzOSA2MC42MTc0IDI1OC40MzcgNjAuNjE0OEMyNTguMDk4IDYwLjYxMzggMjU3Ljc1OCA2MC42MTI5IDI1Ny40MTggNjAuNjEyQzI1Ni41ODQgNjAuNjA5OCAyNTUuNzQ5IDYwLjYwNjMgMjU0LjkxNSA2MC42MDIyQzI1NS4wNDIgNTkuNzQ3NCAyNTUuMzM3IDU5LjA3NzMgMjU1LjcyMyA1OC4zMDY2QzI1NS43ODUgNTguMTgwNSAyNTUuODQ4IDU4LjA1NDQgMjU1LjkxMyA1Ny45MjQ1QzI1Ni4xMjMgNTcuNTAzMiAyNTYuMzM0IDU3LjA4MjggMjU2LjU0NiA1Ni42NjI0QzI1Ni42OTcgNTYuMzYwMiAyNTYuODQ4IDU2LjA1NzkgMjU2Ljk5OSA1NS43NTU1QzI1Ny40MDggNTQuOTM1NCAyNTcuODE5IDU0LjExNiAyNTguMjMxIDUzLjI5NjhDMjU4LjY2MSA1Mi40NCAyNTkuMDg5IDUxLjU4MjYgMjU5LjUxOCA1MC43MjUzQzI2MC4yMzggNDkuMjg2NCAyNjAuOTU5IDQ3Ljg0NzkgMjYxLjY4IDQ2LjQwOTdDMjYyLjYwNyA0NC41NjE1IDI2My41MzIgNDIuNzEyNiAyNjQuNDU3IDQwLjg2MzVDMjY1LjI1MiAzOS4yNzU2IDI2Ni4wNDcgMzcuNjg4MSAyNjYuODQyIDM2LjEwMDdDMjY3LjA5OCAzNS41ODkzIDI2Ny4zNTQgMzUuMDc3OCAyNjcuNjEgMzQuNTY2NEMyNjguMDExIDMzLjc2NDQgMjY4LjQxMyAzMi45NjI3IDI2OC44MTYgMzIuMTYxMUMyNjguOTY0IDMxLjg2NjIgMjY5LjExMSAzMS41NzExIDI2OS4yNTkgMzEuMjc2MUMyNjkuNDYgMzAuODc0OSAyNjkuNjYxIDMwLjQ3MzkgMjY5Ljg2MiAzMC4wNzNDMjY5Ljk3NSAyOS44NDgxIDI3MC4wODggMjkuNjIzMiAyNzAuMjA0IDI5LjM5MTVDMjcwLjQ2OCAyOC44OSAyNzAuNDY4IDI4Ljg5IDI3MC42NyAyOC42ODhaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yMDQuNDE3IDI4LjY4OEMyMDQuNTUxIDI4LjY4OCAyMDQuNjg0IDI4LjY4OCAyMDQuODIxIDI4LjY4OEMyMDYuODc2IDMyLjc4ODkgMjA4LjkzMSAzNi44OTA0IDIxMC45ODQgNDAuOTkyM0MyMTEuOTM3IDQyLjg5NjggMjEyLjg5MSA0NC44MDExIDIxMy44NDUgNDYuNzA1MUMyMTQuNjc2IDQ4LjM2NDEgMjE1LjUwNyA1MC4wMjMzIDIxNi4zMzggNTEuNjgyOUMyMTYuNzc4IDUyLjU2MjEgMjE3LjIxOCA1My40NDEyIDIxNy42NTkgNTQuMzE5OUMyMTguMDczIDU1LjE0NjIgMjE4LjQ4NyA1NS45NzI4IDIxOC45IDU2Ljc5OThDMjE5LjA1MiA1Ny4xMDQgMjE5LjIwNSA1Ny40MDggMjE5LjM1NyA1Ny43MTE5QzIxOS41NjUgNTguMTI1NCAyMTkuNzcyIDU4LjUzOTMgMjE5Ljk3OCA1OC45NTM0QzIyMC4wOTQgNTkuMTg1NCAyMjAuMjExIDU5LjQxNzQgMjIwLjMzIDU5LjY1NjRDMjIwLjU3NiA2MC4xOTgyIDIyMC41NzYgNjAuMTk4MiAyMjAuNTc2IDYwLjYwMjJDMjE4LjE3NyA2MC42MDIyIDIxNS43NzcgNjAuNjAyMiAyMTMuMzA1IDYwLjYwMjJDMjEwLjQzOCA1NC44Njk3IDIwNy41NzIgNDkuMTM3MyAyMDQuNjE5IDQzLjIzMTJDMjAzLjQ0NiA0NS40NjAxIDIwMi4yNzggNDcuNjgyOSAyMDEuMTU3IDQ5LjkzNzRDMjAwLjk0MyA1MC4zNjkgMjAwLjcyOCA1MC44MDAzIDIwMC41MTMgNTEuMjMxNkMyMDAuMDU5IDUyLjE0MTQgMTk5LjYwNiA1My4wNTE2IDE5OS4xNTMgNTMuOTYxOEMxOTguNjIxIDU1LjAzMDkgMTk4LjA4OCA1Ni4wOTk5IDE5Ny41NTUgNTcuMTY4NkMxOTcuMzQzIDU3LjU5MzMgMTk3LjEzMiA1OC4wMTgyIDE5Ni45MjEgNTguNDQzMkMxOTYuNzkzIDU4LjcwMDMgMTk2LjY2NSA1OC45NTczIDE5Ni41MzYgNTkuMjE0NEMxOTYuNDI1IDU5LjQzOTIgMTk2LjMxMyA1OS42NjQgMTk2LjE5NyA1OS44OTU2QzE5NS45MzQgNjAuNDAwMiAxOTUuOTM0IDYwLjQwMDIgMTk1LjczMiA2MC42MDIyQzE5NS4yMDggNjAuNjIgMTk0LjY4OSA2MC42MjU1IDE5NC4xNjYgNjAuNjIxOUMxOTQuMDA5IDYwLjYyMTYgMTkzLjg1MiA2MC42MjEzIDE5My42OTEgNjAuNjIxQzE5My4xODkgNjAuNjE5OSAxOTIuNjg2IDYwLjYxNzQgMTkyLjE4NCA2MC42MTQ4QzE5MS44NDUgNjAuNjEzOCAxOTEuNTA1IDYwLjYxMjkgMTkxLjE2NSA2MC42MTJDMTkwLjMzMSA2MC42MDk4IDE4OS40OTYgNjAuNjA2MyAxODguNjYyIDYwLjYwMjJDMTg4LjgxOCA1OS43MDcyIDE4OS4xNDEgNTkuMDE0NSAxODkuNTg0IDU4LjIyODhDMTkwLjE4NCA1Ny4xMzQ1IDE5MC43NDEgNTYuMDMwMSAxOTEuMjYzIDU0Ljg5NkMxOTEuOTE5IDUzLjQ3NTIgMTkyLjYzMSA1Mi4wOTA3IDE5My4zNjUgNTAuNzA5QzE5NC41NTYgNDguNDY3MyAxOTUuNjcyIDQ2LjE5NjMgMTk2Ljc0MiA0My44OTQ2QzE5Ny4yNDUgNDIuODIxNCAxOTcuNzkyIDQxLjc3ODQgMTk4LjM1OCA0MC43Mzc2QzE5OC44NTYgMzkuODE2MyAxOTkuMzA4IDM4Ljg3OTYgMTk5Ljc0NiAzNy45MjlDMjAwLjQwMiAzNi41MTA1IDIwMS4xMTIgMzUuMTI3NyAyMDEuODQ2IDMzLjc0ODZDMjAyLjY2NCAzMi4yMTAyIDIwMy40NDMgMzAuNjUzOSAyMDQuMjE1IDI5LjA5MkMyMDQuMjgyIDI4Ljk1ODcgMjA0LjM0OSAyOC44MjUzIDIwNC40MTcgMjguNjg4WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNNzQuNzQwMiAyOS40OTY2QzgzLjMzODkgMjkuNDk2NiA5MS45Mzc1IDI5LjQ5NjYgMTAwLjc5NyAyOS40OTY2QzEwMC43OTcgMzEuNjk2MiAxMDAuNzk3IDMzLjg5NTkgMTAwLjc5NyAzNi4xNjIyQzk3LjU5NzMgMzYuMTYyMiA5NC4zOTc4IDM2LjE2MjIgOTEuMTAxMyAzNi4xNjIyQzkxLjEwMTMgNDQuMjI3NiA5MS4xMDEzIDUyLjI5MyA5MS4xMDEzIDYwLjYwMjhDODguOTAxNyA2MC42MDI4IDg2LjcwMiA2MC42MDI4IDg0LjQzNTcgNjAuNjAyOEM4NC40MzU3IDUyLjUzNzQgODQuNDM1NyA0NC40NzIgODQuNDM1NyAzNi4xNjIyQzgxLjIzNjIgMzYuMTYyMiA3OC4wMzY3IDM2LjE2MjIgNzQuNzQwMiAzNi4xNjIyQzc0Ljc0MDIgMzMuOTYyNSA3NC43NDAyIDMxLjc2MjkgNzQuNzQwMiAyOS40OTY2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMjIyLjk5OSAyOS40OTY2QzIyNS4xOTkgMjkuNDk2NiAyMjcuMzk4IDI5LjQ5NjYgMjI5LjY2NSAyOS40OTY2QzIyOS42NjUgMzcuNTYyIDIyOS42NjUgNDUuNjI3NCAyMjkuNjY1IDUzLjkzNzJDMjM0LjM5NyA1My45MzcyIDIzOS4xMyA1My45MzcyIDI0NC4wMDYgNTMuOTM3MkMyNDQuMDA2IDU2LjEzNjggMjQ0LjAwNiA1OC4zMzY1IDI0NC4wMDYgNjAuNjAyOEMyMzcuMDc0IDYwLjYwMjggMjMwLjE0MSA2MC42MDI4IDIyMi45OTkgNjAuNjAyOEMyMjIuOTk5IDUwLjMzNzggMjIyLjk5OSA0MC4wNzI3IDIyMi45OTkgMjkuNDk2NloiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTE2My4yMTIgMjIuMDIyNUMxNjYuMDExIDIyLjAyMjUgMTY4LjgxMSAyMi4wMjI1IDE3MS42OTUgMjIuMDIyNUMxNzIuNzA1IDIzLjkzMDIgMTczLjcxIDI1LjgyOSAxNzQuNjY4IDI3Ljc2MThDMTc1LjIzIDI4Ljg5MyAxNzUuODAyIDMwLjAxOTUgMTc2LjM3MyAzMS4xNDYzQzE3Ny41MSAzMy4zOTE4IDE3OC42NDQgMzUuNjM4OSAxNzkuNzc2IDM3Ljg4NzJDMTgwLjQ1OCAzOS4yNDE2IDE4MS4xNDEgNDAuNTk1NCAxODEuODI4IDQxLjk0NzZDMTgyLjQzMSA0My4xMzY0IDE4My4wMzIgNDQuMzI2NSAxODMuNjMgNDUuNTE4MkMxODMuOTQ1IDQ2LjE0NjMgMTg0LjI2MiA0Ni43NzM3IDE4NC41ODEgNDcuMzk5NkMxODQuOTM2IDQ4LjA5NSAxODUuMjg1IDQ4Ljc5MzIgMTg1LjYzNCA0OS40OTE4QzE4NS43NCA0OS42OTY5IDE4NS44NDYgNDkuOTAyMSAxODUuOTU1IDUwLjExMzRDMTg2LjUwNSA1MS4yMjggMTg2Ljc5NyA1MS45MTYgMTg2LjQ0MSA1My4xMjg3QzE4Ni4yNTggNTMuNTg3IDE4Ni4yNTggNTMuNTg3IDE4Ni4wMzYgNTMuOTg1NkMxODUuOTU0IDU0LjEzNjggMTg1Ljg3MSA1NC4yODggMTg1Ljc4NiA1NC40NDM3QzE4NS42OTggNTQuNjAxMyAxODUuNjEgNTQuNzU5IDE4NS41MTkgNTQuOTIxM0MxODQuODAyIDU2LjIzODggMTg0LjExOSA1Ny41NjI5IDE4My40ODcgNTguOTIzMkMxODMuNDE3IDU5LjA3MiAxODMuMzQ4IDU5LjIyMDggMTgzLjI3NyA1OS4zNzQxQzE4My4xMTkgNTkuNzE1OCAxODIuOTYyIDYwLjA1OCAxODIuODA1IDYwLjQwMDNDMTgyLjA2MyA2MC4xNTMxIDE4MS45NzIgNTkuODY0MiAxODEuNjMgNTkuMTkxN0MxODEuNTU5IDU5LjA0NjUgMTgxLjQ4OCA1OC45MDE0IDE4MS40MTQgNTguNzUxOEMxODEuMzM3IDU4LjU5ODYgMTgxLjI2IDU4LjQ0NTUgMTgxLjE4MSA1OC4yODc2QzE4MC45MjEgNTcuNzcxNCAxODAuNjY1IDU3LjI1MzggMTgwLjQwOSA1Ni43MzYyQzE4MC4yMjQgNTYuMzY2OSAxODAuMDM5IDU1Ljk5NzcgMTc5Ljg1NCA1NS42Mjg2QzE3OS4zNTEgNTQuNjIzOCAxNzguODUxIDUzLjYxNzcgMTc4LjM1MSA1Mi42MTEzQzE3Ny44MjggNTEuNTYwMSAxNzcuMzAzIDUwLjUxIDE3Ni43NzggNDkuNDU5N0MxNzUuODk3IDQ3LjY5NTQgMTc1LjAxNyA0NS45MzAzIDE3NC4xMzggNDQuMTY0OEMxNzIuODk4IDQxLjY3MyAxNzEuNjU1IDM5LjE4MjcgMTcwLjQxMiAzNi42OTI2QzE2OS41NTIgMzQuOTcwMiAxNjguNjkzIDMzLjI0NzUgMTY3LjgzNCAzMS41MjQ4QzE2Ny42MjUgMzEuMTA2NCAxNjcuNDE2IDMwLjY4OCAxNjcuMjA4IDMwLjI2OTdDMTY2LjYxMyAyOS4wNzY5IDE2Ni4wMTggMjcuODg0IDE2NS40MjQgMjYuNjkwOEMxNjUuMjQ0IDI2LjMyODcgMTY1LjA2NCAyNS45NjY4IDE2NC44ODMgMjUuNjA0OUMxNjQuNjM4IDI1LjExMjIgMTY0LjM5MiAyNC42MTkzIDE2NC4xNDcgMjQuMTI2MkMxNjQuMDc1IDIzLjk4MiAxNjQuMDAzIDIzLjgzNzcgMTYzLjkyOSAyMy42ODlDMTYzLjY1NiAyMy4xMzgxIDE2My40MDcgMjIuNjA2OCAxNjMuMjEyIDIyLjAyMjVaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yNDUuODI2IDI5LjQ5NjZDMjQ4LjAyNiAyOS40OTY2IDI1MC4yMjUgMjkuNDk2NiAyNTIuNDkyIDI5LjQ5NjZDMjUyLjQ5MiAzOS43NjE2IDI1Mi40OTIgNTAuMDI2NyAyNTIuNDkyIDYwLjYwMjhDMjUwLjI5MiA2MC42MDI4IDI0OC4wOTIgNjAuNjAyOCAyNDUuODI2IDYwLjYwMjhDMjQ1LjgyNiA1MC4zMzc4IDI0NS44MjYgNDAuMDcyNyAyNDUuODI2IDI5LjQ5NjZaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xOTQuMDkxIDIyQzE5NC40NCAyMiAxOTQuNzkgMjIuMDAxMiAxOTUuMTM5IDIyLjAwMzJDMTk1LjMyMiAyMi4wMDM1IDE5NS41MDYgMjIuMDAzOCAxOTUuNjk1IDIyLjAwNDFDMTk2LjI4NCAyMi4wMDUyIDE5Ni44NzIgMjIuMDA3NyAxOTcuNDYxIDIyLjAxMDNDMTk3Ljg1OSAyMi4wMTEzIDE5OC4yNTcgMjIuMDEyMiAxOTguNjU1IDIyLjAxMzFDMTk5LjYzMyAyMi4wMTUzIDIwMC42MTEgMjIuMDE4OCAyMDEuNTg5IDIyLjAyMjlDMjAxLjI5OCAyMi45NzgzIDIwMC45MDIgMjMuODUzNyAyMDAuNDUxIDI0Ljc0MTlDMjAwLjM4IDI0Ljg4NDkgMjAwLjMwOCAyNS4wMjggMjAwLjIzNCAyNS4xNzU0QzIwMC4wMDUgMjUuNjMxNSAxOTkuNzc0IDI2LjA4NjkgMTk5LjU0NCAyNi41NDI0QzE5OS4zOTQgMjYuODQwNCAxOTkuMjQ0IDI3LjEzODQgMTk5LjA5NCAyNy40MzY0QzE5OC43OTYgMjguMDMwMiAxOTguNDk2IDI4LjYyMzkgMTk4LjE5NyAyOS4yMTc0QzE5Ny41NjggMzAuNDY1NiAxOTYuOTQzIDMxLjcxNjIgMTk2LjMxOSAzMi45NjY3QzE5NS45MzQgMzMuNzM4MyAxOTUuNTQ4IDM0LjUwOTYgMTk1LjE2MiAzNS4yODA4QzE5NC43MzUgMzYuMTMzNCAxOTQuMzEgMzYuOTg2NyAxOTMuODg2IDM3Ljg0MDRDMTkzLjc3NiAzOC4wNjE0IDE5My42NjYgMzguMjgyNSAxOTMuNTUyIDM4LjUxMDJDMTkzLjMzMiAzOC45NTIyIDE5My4xMTMgMzkuMzk0MyAxOTIuODkzIDM5LjgzNjZDMTkyLjc5MyA0MC4wMzgxIDE5Mi42OTIgNDAuMjM5NiAxOTIuNTg5IDQwLjQ0NzNDMTkyLjQ5OSA0MC42Mjg3IDE5Mi40MDggNDAuODEwMiAxOTIuMzE1IDQwLjk5NzJDMTkyLjA5NiA0MS40MTM4IDE5Mi4wOTYgNDEuNDEzOCAxOTEuODk0IDQxLjYxNThDMTkxLjI2NyA0MS42MzM3IDE5MC42NDUgNDEuNjM5MSAxOTAuMDE4IDQxLjYzNTVDMTg5LjgzIDQxLjYzNTMgMTg5LjY0MiA0MS42MzUgMTg5LjQ0OCA0MS42MzQ3QzE4OC44NDUgNDEuNjMzNSAxODguMjQyIDQxLjYzMSAxODcuNjM5IDQxLjYyODRDMTg3LjIzMiA0MS42Mjc0IDE4Ni44MjQgNDEuNjI2NSAxODYuNDE2IDQxLjYyNTdDMTg1LjQxNCA0MS42MjM0IDE4NC40MTIgNDEuNjIgMTgzLjQxIDQxLjYxNThDMTgzLjY2NSA0MC45NjEgMTgzLjk0IDQwLjMyNzggMTg0LjI1NCAzOS42OTkyQzE4NC4zNDEgMzkuNTI1NiAxODQuNDI3IDM5LjM1MjEgMTg0LjUxNiAzOS4xNzMzQzE4NC42MSAzOC45ODczIDE4NC43MDMgMzguODAxMyAxODQuNzk5IDM4LjYwOTdDMTg0Ljk0NSAzOC4zMTYxIDE4NC45NDUgMzguMzE2MSAxODUuMDk1IDM4LjAxNjZDMTg1LjMwMyAzNy42MDEyIDE4NS41MTEgMzcuMTg1OSAxODUuNzE5IDM2Ljc3MDhDMTg2LjAzIDM2LjE0OTIgMTg2LjM0IDM1LjUyNzIgMTg2LjY1MSAzNC45MDUyQzE4Ny42NzQgMzIuODU4NSAxODguNzExIDMwLjgyMTMgMTg5Ljc4MyAyOC43OTk2QzE5MC41MTQgMjcuNDE4NyAxOTEuMjE0IDI2LjAyNDQgMTkxLjkwNiAyNC42MjM1QzE5Mi4xMzEgMjQuMTY4NCAxOTIuMzU3IDIzLjcxMzMgMTkyLjU4MiAyMy4yNTg1QzE5Mi42NzkgMjMuMDY0IDE5Mi43NzUgMjIuODY5NSAxOTIuODc0IDIyLjY2OUMxOTMuMjEgMjIuMDI1OCAxOTMuMjEgMjIuMDI1OCAxOTQuMDkxIDIyWiIgZmlsbD0iIzRCNEI0QiI+PC9wYXRoPgo8cGF0aCBkPSJNMzMuMzMzIDUyLjkyNzJDMzQuNDkzOSA1Mi44ODcyIDM1LjY1NDQgNTIuODU3OSAzNi44MTU4IDUyLjgzODVDMzcuMjEwNiA1Mi44MzAzIDM3LjYwNTQgNTIuODE5MyAzOC4wMDAxIDUyLjgwNTNDMzguNTY4MyA1Mi43ODU3IDM5LjEzNTggNTIuNzc2NSAzOS43MDQzIDUyLjc2OTRDMzkuOTY4MiA1Mi43NTY5IDM5Ljk2ODIgNTIuNzU2OSA0MC4yMzc1IDUyLjc0NDFDNDAuNzQzMSA1Mi43NDM4IDQxLjEzNTQgNTIuNzY0MyA0MS42MTQ1IDUyLjkyNzJDNDIuMDg1OCA1My40MDUgNDIuMzQ2IDUzLjkzNzcgNDIuNjI0NSA1NC41NDMxQzQyLjgwOTcgNTQuODg3OCA0Mi44MDk3IDU0Ljg4NzggNDIuOTk4NyA1NS4yMzkzQzQzLjE2ODUgNTUuNTc4MiA0My4xNjg1IDU1LjU3ODIgNDMuMzQxNyA1NS45MjM5QzQzLjQwMyA1Ni4wNDYyIDQzLjQ2NDQgNTYuMTY4NSA0My41Mjc2IDU2LjI5NDVDNDMuNjU1MSA1Ni41NDkyIDQzLjc4MjIgNTYuODA0MSA0My45MDg5IDU3LjA1OTJDNDQuMTAzNSA1Ny40NTA3IDQ0LjI5OTkgNTcuODQxMyA0NC40OTY0IDU4LjIzMThDNDQuNjIwOCA1OC40ODA4IDQ0Ljc0NTEgNTguNzI5OSA0NC44NjkyIDU4Ljk3OUM0NC45ODEzIDU5LjIwMzUgNDUuMDkzMyA1OS40MjgxIDQ1LjIwODggNTkuNjU5NEM0NS40NTIzIDYwLjE5ODggNDUuNDUyMyA2MC4xOTg4IDQ1LjQ1MjMgNjAuNjAyOEM0Mi42NTI4IDYwLjYwMjggMzkuODUzMiA2MC42MDI4IDM2Ljk2ODggNjAuNjAyOEMzNi4zNjg5IDU5LjQxMTMgMzUuNzY5IDU4LjIxOTggMzUuMTUwOSA1Ni45OTIyQzM0Ljk2MTEgNTYuNjE2MyAzNC43NzEzIDU2LjI0MDMgMzQuNTc1NyA1NS44NTNDMzQuNDI2NSA1NS41NTU4IDM0LjI3NzQgNTUuMjU4NiAzNC4xMjgzIDU0Ljk2MTNDMzQuMDQ5OCA1NC44MDY0IDMzLjk3MTMgNTQuNjUxNCAzMy44OTA0IDU0LjQ5MThDMzMuMzMzIDUzLjM3NzMgMzMuMzMzIDUzLjM3NzMgMzMuMzMzIDUyLjkyNzJaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xNjUuNjM2IDUzLjEyODlDMTY4LjM2OSA1My4xMjg5IDE3MS4xMDIgNTMuMTI4OSAxNzMuOTE3IDUzLjEyODlDMTc1LjkxOCA1Ni45MDgxIDE3NS45MTggNTYuOTA4MSAxNzYuODcxIDU4Ljc5NzJDMTc2Ljk0IDU4LjkzMjkgMTc3LjAxIDU5LjA2ODUgMTc3LjA4MSA1OS4yMDgzQzE3Ny41NTMgNjAuMTUwOCAxNzcuNTUzIDYwLjE1MDggMTc3LjU1MyA2MC42MDI1QzE3NC43NTQgNjAuNjAyNSAxNzEuOTU0IDYwLjYwMjUgMTY5LjA3IDYwLjYwMjVDMTY4LjUwMyA1OS40ODE4IDE2Ny45MzYgNTguMzYxMiAxNjcuMzUzIDU3LjIwNjVDMTY3LjE3MyA1Ni44NTM1IDE2Ni45OTQgNTYuNTAwNSAxNjYuODA5IDU2LjEzNjhDMTY2LjY2OCA1NS44NTY3IDE2Ni41MjggNTUuNTc2NSAxNjYuMzg3IDU1LjI5NjNDMTY2LjMxMyA1NS4xNTEyIDE2Ni4yMzkgNTUuMDA2IDE2Ni4xNjIgNTQuODU2NEMxNjUuNjM2IDUzLjgwNCAxNjUuNjM2IDUzLjgwNCAxNjUuNjM2IDUzLjEyODlaIiBmaWxsPSIjNEI0QjRCIj48L3BhdGg+Cjwvc3ZnPg=="
  },
  "alterdata": {
    label: "Alterdata",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzI0IiBoZWlnaHQ9IjgzIiB2aWV3Qm94PSIwIDAgMzI0IDgzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjQuMDg3NCAzMy4xNjAyQzIzLjkyNiAzMi45OTg4IDIzLjY4MzkgMzIuOTUzNCAyMy40NzIgMzMuMDM5MkMyMy4yNjAyIDMzLjEyNDkgMjMuMTI0IDMzLjMzMTcgMjMuMTI0IDMzLjU2MzdWNDkuNTg3OUMyMy4xMjQgNDkuODE0OSAyMy4yNjAyIDUwLjAyMTcgMjMuNDcyIDUwLjExMjVDMjMuNTQyNyA1MC4xNDI4IDIzLjYxMzMgNTAuMTU3OSAyMy42ODg5IDUwLjE1NzlDMjMuODM1MiA1MC4xNTc5IDIzLjk4MTUgNTAuMTAyNCAyNC4wODc0IDQ5Ljk5MTRMMzIuMTAyIDQxLjk3NjhDMzIuMjA3OSA0MS44NzA5IDMyLjI2ODUgNDEuNzI0NiAzMi4yNjg1IDQxLjU3ODRDMzIuMjY4NSA0MS40MzIxIDMyLjIwNzkgNDEuMjg1OCAzMi4xMDIgNDEuMTc5OUwyNC4wODc0IDMzLjE2NTNWMzMuMTYwMloiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTU3Ljg2MDYgNDQuMjM2NEM1OC45MTQ3IDQ1LjI5MDUgNjAuMzA2OCA0NS44NzA1IDYxLjc3OTYgNDUuODcwNUM2NC44NTYzIDQ1Ljg3MDUgNjcuMzU4MSA0My4zNzM5IDY3LjM1ODEgNDAuMzAyMlYxOC42NTkyQzY3LjM1ODEgMTUuNTcyMyA2NC44NDYzIDEzLjA1MDQgNjEuNzU0NCAxMy4wNDU0TDM5Ljk5NTQgMTNDMzcuNzUwOSAxMyAzNS43NDg1IDE0LjM0MTcgMzQuODkxIDE2LjQxNDdDMzQuMDMzNiAxOC40ODc3IDM0LjUwMjcgMjAuODUzMiAzNi4wODY0IDIyLjQzN0w0MS4wMTkzIDI3LjM3NDlMMzguODQ1NCAyOS41NDg4TDI0Ljg0ODggMTUuNTUyMkMyMy4yNDQ5IDEzLjk0ODIgMjEuMTE2NCAxMy4wNzA2IDE4Ljg1MTcgMTMuMDcwNkMxNC4xNzYxIDEzLjA3MDYgMTAuMzczIDE2Ljg3MzcgMTAuMzczIDIxLjU0OTNWNjEuNTA2NEMxMC4zNzMgNjYuMTg3IDE0LjE4MTEgNjkuOTk1MSAxOC44NjE4IDY5Ljk5NTFDMjEuMTMxNSA2OS45OTUxIDIzLjI3MDEgNjkuMTEyNSAyNC44NjkgNjcuNTA4NUwzOC44NDAzIDUzLjUzNzJMNTIuODQyIDY3LjU0MzhDNTQuNDI1NyA2OS4xMjc2IDU2LjUzNCA3MC4wMDAyIDU4Ljc2ODUgNzAuMDAwMkg1OC45NjUyQzYzLjU4NTMgNzAuMDAwMiA2Ny4zNDggNjYuMjM3NSA2Ny4zNDggNjEuNTExNEM2Ny4zNDggNTkuMjcyIDY2LjQ3NTQgNTcuMTYzNyA2NC44ODY2IDU1LjU3OTlMNTAuODI5NSA0MS41NDhMNTIuOTkzMyAzOS4zODQyTDU3Ljg1MDUgNDQuMjQ2NEw1Ny44NjA2IDQ0LjIzNjRaTTQ0Ljk1MzQgNDEuOTQxNEw2MS43NTk0IDU4LjcxNzFDNjIuNTA1OSA1OS40NjM2IDYyLjkxNDUgNjAuNDUyMiA2Mi45MTQ1IDYxLjYwNzNDNjIuOTE0NSA2My43ODExIDYxLjE0OTEgNjUuNTQ2NSA1OC45NzUzIDY1LjU0NjVINTguNzc4NUM1Ny43MjQ0IDY1LjU0NjUgNTYuNzM1OCA2NS4xMzc5IDU1Ljk5NDQgNjQuMzkxNEwzOS4yNDg5IDQ3LjY0NkMzOS4xMzc5IDQ3LjUzNSAzOC45OTE3IDQ3LjQ3OTUgMzguODUwNCA0Ny40Nzk1QzM4LjcwOTIgNDcuNDc5NSAzOC41NjI5IDQ3LjUzNSAzOC40NTIgNDcuNjQ2TDIxLjczNjggNjQuMzYxMkMyMC45NzUxIDY1LjEyMjggMTkuOTU2MyA2NS41NDY1IDE4Ljg2NjggNjUuNTQ2NUMxNi42Mzc1IDY1LjU0NjUgMTQuODIxNyA2My43MzA3IDE0LjgyMTcgNjEuNTAxM1YyMS41NDkzQzE0LjgyMTcgMTkuMzI0OSAxNi42MzI0IDE3LjUxNDIgMTguODU2NyAxNy41MTQyQzE5LjkzNjEgMTcuNTE0MiAyMC45NDk5IDE3LjkzMjkgMjEuNzExNSAxOC42OTk1TDM4LjQ0NjkgMzUuNDM0OUMzOC42Njg5IDM1LjY1NjggMzkuMDI3IDM1LjY1NjggMzkuMjQ4OSAzNS40MzQ5TDQ2LjkwNTQgMjcuNzc4NEM0Ny4xMjczIDI3LjU1NjUgNDcuMTI3MyAyNy4xOTgzIDQ2LjkwNTQgMjYuOTc2NEwzOS4yMzM4IDE5LjI5OTdDMzguNzU5NiAxOC44MjU2IDM4LjkzMTEgMTguMjc1OCAzOC45OTY3IDE4LjExNDRDMzkuMDYyMyAxNy45NTMgMzkuMzI5NiAxNy40NDM2IDQwLjAwMDQgMTcuNDQzNkw2MS43NDQzIDE3LjQ4OUM2Mi4zODk5IDE3LjQ4OSA2Mi45MTQ1IDE4LjAxODYgNjIuOTE0NSAxOC42NjQyVjQwLjMwNzJDNjIuOTE0NSA0MS4wODQgNjIuMjQ4NyA0MS40MzIgNjEuNzc5NiA0MS40MzJDNjEuNDgyIDQxLjQzMiA2MS4yMjQ4IDQxLjMyMSA2MS4wMDI5IDQxLjA5OTFMNTMuNDA2OSAzMy40OTNDNTMuMzAxIDMzLjM4NzEgNTMuMTU0NyAzMy4zMjY2IDUzLjAwODQgMzMuMzI2NkM1Mi44NjIyIDMzLjMyNjYgNTIuNzE1OSAzMy4zODcxIDUyLjYxIDMzLjQ5M0w0NC45NTg1IDQxLjE0NDVDNDQuODUyNiA0MS4yNTA0IDQ0Ljc5MiA0MS4zOTY3IDQ0Ljc5MiA0MS41NDNDNDQuNzkyIDQxLjY4OTIgNDQuODUyNiA0MS44MzU1IDQ0Ljk1ODUgNDEuOTQxNEg0NC45NTM0WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMTQ2LjEwMiAyOC4zMzg0SDE0MC41NDlMMTQwLjU2NCAyMy4wMzczQzE0MC41NjQgMjIuNTgzNCAxNDAuMzg3IDIyLjE1NDcgMTQwLjA3IDIxLjgzMTlDMTM5Ljc1MiAyMS41MDkxIDEzOS4zMTggMjEuMzMyNSAxMzguODY5IDIxLjMzMjVIMTM3Ljg0NUMxMzUuNTM1IDIxLjMzMjUgMTMzLjU5OSAyMi45NjE3IDEzMy4zMzEgMjUuMDgwMUMxMzMuMzExIDI1LjE5MSAxMzMuMjk2IDI1LjMwMiAxMzMuMjk2IDI1LjQxOFY1MC43NzgzQzEzMy4yOTYgNTYuODc2MyAxMzYuMzk4IDYwLjI0MDUgMTQyLjAzMiA2MC4yNDA1SDE0NC43NUMxNDUuNjg5IDYwLjI0MDUgMTQ2LjQ1IDU5LjQ3ODkgMTQ2LjQ1IDU4LjU0MDhWNTQuNjIxN0MxNDYuNDUgNTMuNjgzNiAxNDUuNjg5IDUyLjkyMTkgMTQ0Ljc1IDUyLjkyMTlIMTQyLjI1NEMxNDAuNzM2IDUyLjkyMTkgMTQwLjU2OSA1MC44MDM1IDE0MC41NjkgNDkuODk1NkwxNDAuNTQ5IDM1LjY4MjJIMTQ2LjEwN0MxNDcuMDQ1IDM1LjY4MjIgMTQ3LjgwNyAzNC45MjA2IDE0Ny44MDcgMzMuOTgyNFYzMC4wMzgxQzE0Ny44MDcgMjkuMSAxNDcuMDQ1IDI4LjMzODQgMTQ2LjEwNyAyOC4zMzg0SDE0Ni4xMDJaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yODIuNjQzIDI4LjI4MjdIMjc2LjgwN1YyMi45MzEyQzI3Ni44MDcgMjEuOTkzMSAyNzYuMDQ2IDIxLjIzMTQgMjc1LjEwNyAyMS4yMzE0SDI3NC4wNDNDMjcxLjY3MyAyMS4yMzE0IDI2OS42NzUgMjIuODgwOCAyNjkuNDE4IDI1LjAxOTRDMjY5LjM5OCAyNS4xMjUzIDI2OS4zODggMjUuMjI2MSAyNjkuMzg4IDI1LjMzMjFWNTAuOTI0NEMyNjkuMzg4IDU3LjA3MjggMjcyLjU4NSA2MC40NTcyIDI3OC4zOTEgNjAuNDU3MkgyODEuMjFDMjgyLjE0OSA2MC40NTcyIDI4Mi45MSA1OS42OTU2IDI4Mi45MSA1OC43NTc0VjU0LjgwMzFDMjgyLjkxIDUzLjg2NDkgMjgyLjE0OSA1My4xMDMzIDI4MS4yMSA1My4xMDMzSDI3OC42MjNDMjc2Ljk4NCA1My4xMDMzIDI3Ni44MDcgNTAuOTU0NyAyNzYuODA3IDUwLjAzMTZWMzUuNjQ2N0gyODIuNjQzQzI4My41ODEgMzUuNjQ2NyAyODQuMzQzIDM0Ljg4NTEgMjg0LjM0MyAzMy45NDY5VjI5Ljk2NzNDMjg0LjM0MyAyOS4wMjkyIDI4My41ODEgMjguMjY3NiAyODIuNjQzIDI4LjI2NzZWMjguMjgyN1oiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTE5OS4wNzcgMjguMzM4MUgxOTMuNzk2QzE4Ny45NjYgMjguMzM4MSAxODQuNzUzIDMxLjczNzYgMTg0Ljc1MyAzNy45MTEyVjU4LjU5MDlDMTg0Ljc1MyA1OS41MjkgMTg1LjUxNSA2MC4yOTA2IDE4Ni40NTMgNjAuMjkwNkgxOTAuNDIyQzE5MS4zNiA2MC4yOTA2IDE5Mi4xMjIgNTkuNTI5IDE5Mi4xMjIgNTguNTkwOVYzOC4wOTc4QzE5Mi4xMjIgMzUuODg4NiAxOTIuOTU0IDM1LjcwNzEgMTkzLjk1OCAzNS43MDcxSDE5OS4wNzdDMjAwLjAxNiAzNS43MDcxIDIwMC43NzcgMzQuOTQ1NSAyMDAuNzc3IDM0LjAwNzNWMzAuMDMyOEMyMDAuNzc3IDI5LjA5NDYgMjAwLjAxNiAyOC4zMzMgMTk5LjA3NyAyOC4zMzNWMjguMzM4MVoiIGZpbGw9IiMxODE4MTciPjwvcGF0aD4KPHBhdGggZD0iTTIzMC4wMDcgMjEuMjg3M0gyMjguOTQ4QzIyNi4zMSAyMS4yODczIDIyNC4xNjYgMjMuMjA5IDIyNC4xNjYgMjUuNTc0NVYyOC4yOTgySDIxOC4yNTVDMjA5LjQ0OSAyOC42OTE2IDIwMi41NTQgMzUuNzM3OCAyMDIuNTU0IDQ0LjMzMjVDMjAyLjU1NCA1Mi45MjcxIDIwOS40NTQgNjAuMDA4NiAyMTguMzM2IDYwLjQwMjFIMjMwLjAxMkMyMzAuOTUgNjAuNDAyMSAyMzEuNzEyIDU5LjY0MDQgMjMxLjcxMiA1OC43MDIzVjIyLjk4MkMyMzEuNzEyIDIyLjA0MzggMjMwLjk1IDIxLjI4MjIgMjMwLjAxMiAyMS4yODIyTDIzMC4wMDcgMjEuMjg3M1pNMjI0LjE2NiAzNS43NTI5VjUzLjAwNzhIMjE5LjAyN0MyMTQuNDIyIDUzLjAwNzggMjEwLjA2OSA0OC43OTEyIDIxMC4wNjkgNDQuMzMyNUMyMTAuMDY5IDM5Ljg3MzcgMjE0LjM0MSAzNS43NTI5IDIxOS4wMjcgMzUuNzUyOUgyMjQuMTY2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMzExLjkyNyAyOC40MjQzSDMwMC41NTNDMjkyLjM0MiAyOC40MjQzIDI4NS4xNDUgMzUuOTM5NiAyODUuMTQ1IDQ0LjUxNDFDMjg1LjE0NSA1My4wODg2IDI5MS44NzggNjAuMjM1NyAzMDAuNTUzIDYwLjYzNDFIMzExLjkyN0MzMTIuODY1IDYwLjYzNDEgMzEzLjYyNyA1OS44NzI1IDMxMy42MjcgNTguOTM0NFYzMC4xMjQxQzMxMy42MjcgMjkuMTg1OSAzMTIuODY1IDI4LjQyNDMgMzExLjkyNyAyOC40MjQzWk0zMDYuMTk3IDM1Ljg5NDJWNTMuMjI0OEgzMDEuMjM0QzI5Ni43NzEgNTMuMjI0OCAyOTIuNTU0IDQ4Ljk5MyAyOTIuNTU0IDQ0LjUxNDFDMjkyLjU1NCA0MC4wMzUyIDI5Ni42OSAzNS44OTQyIDMwMS4yMzQgMzUuODk0MkgzMDYuMTk3WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMTA2Ljk0OCAyOC4zMzgxSDk1Ljc0NTJDODcuNjQ0OCAyOC4zMzgxIDgwLjUzODEgMzUuNzU3NSA4MC41MzgxIDQ0LjIxMDlDODAuNTM4MSA1Mi42NjQ0IDg3LjE4MDggNTkuNzI1NyA5NS43NDUyIDYwLjExNDFIMTA2Ljk0OEMxMDcuODg2IDYwLjExNDEgMTA4LjY0NyA1OS4zNTI1IDEwOC42NDcgNTguNDE0M1YzMC4wMzI4QzEwOC42NDcgMjkuMDk0NiAxMDcuODg2IDI4LjMzMyAxMDYuOTQ4IDI4LjMzM1YyOC4zMzgxWk0xMDEuMjc4IDUyLjc2NTNIOTYuNDExQzkyLjAyNzkgNTIuNzY1MyA4Ny44ODE5IDQ4LjYwOTEgODcuODgxOSA0NC4yMTA5Qzg3Ljg4MTkgMzkuODEyNyA5MS45NDcyIDM1Ljc0NzQgOTYuNDExIDM1Ljc0NzRIMTAxLjI3OFY1Mi43NjUzWiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8cGF0aCBkPSJNMTY1LjM3NCAyOC40MTM3QzE1Ni45NTEgMjguNDEzNyAxNTAuMDk3IDM1LjU4MSAxNTAuMDk3IDQ0LjM5MjVDMTUwLjA5NyA1My4yMDQxIDE1Ni45MDYgNjAuMzE1OSAxNjUuMjg5IDYwLjM2NjNIMTc1LjMyMUMxNzYuMjU5IDYwLjM2NjMgMTc3LjAyMSA1OS42MDQ3IDE3Ny4wMjEgNTguNjY2NVY1NC43MzI0QzE3Ny4wMjEgNTMuNzk0MiAxNzYuMjU5IDUzLjAzMjYgMTc1LjMyMSA1My4wMzI2SDE2NS4zMDRDMTYxLjg4OSA1My4wMDc0IDE1OC45MDggNTAuNjk3MyAxNTcuNzUzIDQ3LjQyMzlIMTc4Ljg3MkMxNzkuNzQ5IDQ3LjQyMzkgMTgwLjQ4NiA0Ni43NTMxIDE4MC41NjEgNDUuODc1NEMxODAuNjA3IDQ1LjM4NjIgMTgwLjYzMiA0NC44OTE5IDE4MC42MzIgNDQuMzg3NUMxODAuNjMyIDM1LjU3NiAxNzMuNzg3IDI4LjQwODcgMTY1LjM2OSAyOC40MDg3TDE2NS4zNzQgMjguNDEzN1pNMTU4LjMyMyA0MC4wODAxQzE1OS43NTEgMzcuNDUyMyAxNjIuNDE0IDM1Ljc0NzQgMTY1LjM2OSAzNS43NDc0QzE2OC4zMjUgMzUuNzQ3NCAxNzAuOTgzIDM3LjQ1MjMgMTcyLjQwNSA0MC4wODAxSDE1OC4zMjNaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xMjYuMDA3IDUyLjc5MDVIMTIzLjEzMkMxMjIuNDExIDUyLjc5MDUgMTIxLjY3IDUyLjc5MDUgMTIxLjY3IDUwLjgyMzRWMjMuMDQyMUMxMjEuNjcgMjIuMTAzOSAxMjAuOTA4IDIxLjM0MjMgMTE5Ljk3IDIxLjM0MjNIMTE4LjU5OEMxMTYuMzk0IDIxLjM0MjMgMTE0LjUzOCAyMi44NzA2IDExNC4yNzYgMjQuODYyOUMxMTQuMjU1IDI0Ljk3MzggMTE0LjI0IDI1LjA4NDggMTE0LjI0IDI1LjIwMDhWNTEuNDc0QzExNC4yNCA1Ny4xMTMgMTE3LjE3NiA2MC4yMTUgMTIyLjUxMiA2MC4yMTVIMTI2LjAxMkMxMjYuOTUxIDYwLjIxNSAxMjcuNzEyIDU5LjQ1MzQgMTI3LjcxMiA1OC41MTUyVjU0LjQ4MDJDMTI3LjcxMiA1My41NDIgMTI2Ljk1MSA1Mi43ODA0IDEyNi4wMTIgNTIuNzgwNEwxMjYuMDA3IDUyLjc5MDVaIiBmaWxsPSIjMTgxODE3Ij48L3BhdGg+CjxwYXRoIGQ9Ik0yNjIuMTA1IDI4LjM2ODhIMjUwLjc2MUMyNDIuNTc1IDI4LjM2ODggMjM1LjM5MyAzNS44NjM5IDIzNS4zOTMgNDQuNDEzMkMyMzUuMzkzIDUyLjk2MjUgMjQyLjExMSA2MC4wOTQ0IDI1MC43NjEgNjAuNDg3OEgyNjIuMTA1QzI2My4wNDMgNjAuNDg3OCAyNjMuODA0IDU5LjcyNjIgMjYzLjgwNCA1OC43ODgxVjMwLjA2MzVDMjYzLjgwNCAyOS4xMjU0IDI2My4wNDMgMjguMzYzOCAyNjIuMTA1IDI4LjM2MzhWMjguMzY4OFpNMjU2LjM4IDUzLjA5MzZIMjUxLjQzN0MyNDYuOTg4IDUzLjA5MzYgMjQyLjc4NyA0OC44NzcgMjQyLjc4NyA0NC40MTMyQzI0Mi43ODcgMzkuOTQ5NCAyNDYuOTA4IDM1LjgyODYgMjUxLjQzNyAzNS44Mjg2SDI1Ni4zOFY1My4wOTM2WiIgZmlsbD0iIzE4MTgxNyI+PC9wYXRoPgo8L3N2Zz4="
  },
  "acrisure": {
    label: "Acrisure",
    src: "data:image/png;base64,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"
  },
  "apisul": {
    label: "Apisul",
    src: "data:image/png;base64,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"
  },
  "carraro-seguros": {
    label: "Carraro Seguros",
    src: "data:image/png;base64,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"
  },
  "patrimonial": {
    label: "Patrimonial",
    src: "data:image/png;base64,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"
  },
  "hellner": {
    label: "Hellner",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAABzCAYAAADg4ntnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAX8xJREFUeAHtvQe4JUd1IHxOdbj3vjyjNxppNGhGSCggIQlGGPhNEJicTXQAE2wTnLG9LLY//7b/3/t797fN2hjb6wVsgzEm2IQ1BoERKCCykBDKcTQajSbPizd0qNpTfW/fV7duVXd1v/cGedGZ783trq4T6lTVqVOnqqs9+OEFBvUAB7gCHgEV6urzB1EP6+GJsPnwgyjb/8n1wLTrR/ruI/CwBdlA6xiZvCM+Ao/AhoEP5kYlBn8na0RUedZp5BzcZd2IslWVNc8PNflWKZ+J52YaDlUXfJDmIut6daJC1XrIZa0qJ4Nqdc+hupy5XDlvgOr6qVMPG9EfqvbBKvWg8wEorge93lQ+Vp42Ymi5rgN1R//N4KUqYT3l0husS16TDHX4bpZucqgynUDLrymP3rlNHp5r+fQ8wpLuQgNL8ugyVZHP5P2W8bPlc8Wz5S2rh41ok3XaZ5X+6MoHHdKM9boZnoO0vmqnMnUwU4Muw7HRUEfDqrEBAeOjeBEUlY0X8NDvXeXU5XPFNclZladwpAtQTFs4yKLydJFTOPCxPdcNQxkOwGh7rSvfep7pbdtWv7yEtms9VAFRcm+To0o92OjUeabLMYJTxSDaOolOGDUcFU+nUVX5Ol/TfVmjKKNZRaY6I2KVhigMeerorMxYqDRxHTg23ja63ECTO9zr7QgN9KrUJbekmeTUeRUNWra6FiV8sEROWx/bqHowyWUqr0tb/kHUQ1nbVfOPtCnPAdEG6qilXhfRY0oevYKK6Jr4mHipMpg6CRTw1enpcqBC1yaHSVZTfp2HKV/ZCKg3bHTA03nn+ZlG2yYnaHLqaSY8tPDU08AggxqzU+91OXIcXbYyWW1tCUtktdWRXl5T+9SdEObIx9RudR1sdD2oMqp1UKZjFdZbD8KSDmCvB1O9mGjm4YJhfg/WB3U6oqiYp6ywdQEd8pjkKDJwRfiuearqcT36qYJr6pCgpNnSy2i71EMRT1sntOWxyWqib+tYogSvLM96aRTpcjPrIc+nD1JFdMHCu6weXOvJFWwD/Qis1yD+MEIVg/jDBEU6cen8ZbR1Oi71sJ4OVeYpV8E7mbCZ9VBGYzOgbj3o+Z3Ah+IpSyViGm5dPBXXdWpVlMeGo7ryriAM+TdyFDPxq8qnjk42gieHcU+kqC1U0aVOx1VGG17VNmqaxpXhrqcenLwZC16deqjDS6ddBdelD5rk1j1/DtXrv1A+m0FUmdXpUHXwclymyaHStOFARZ46H1fQ6W/2xuA69ZDjAGxcPbjwdEmri6OnuxpEW0erWm+5TvN26IK/nnooireV4bmk6VDXeKt9XZa1il7L6qHILlWph0rhEteKdQWdYZ2RRl/5kUY7LOFVZR9VUecqg40aTesMMjleVU+jSvlyYAo/F8Ca/OrIVpdGXc/e1J6ryl1FL7Y2UtWw1dXLeqHOQFiVrks9FPUVa334UA66e2tjrm+RqNvYm61W65RYsAsYeKdxAUeSnrgeYPkojK+GmmQrdYsNNKrkB3CfAup81gP5CFxF3pw3gHuHUumXTUlUPPW3Cr/1dsgyvds6TxUDJQz3ZZ6pjZ/rVLvKwK17Tmo/1N/d3QidF4Go+DxvY2XvGFetB9ftd6j8CheDaHLfwSCYBPLktrRgojfR5LxB90wI4QsREJ/JodchRI/BZMQgko5fRH++73Gc5phuFdzblnLYjcBfRsZwGzD8n9CKb4NOLdk2G1RD4NrQ1iOrPgUz8RUFPEHBL5KHF+Q30c6nPyZDcDLAVAaTQTIZexcDZdMpOvLWceqAykeXXZdBlYtr97rcOv2iPABu3pmJpi6DDqYXLFCTpe4g5ozjYhBzUPeE6ZXC5ufnW4uLyaPBSy5F7p2fcn+nQLEVBWwhEzgN0GlCf1Xbo3QGHUb0Urr3GD33EkmHI9HingCUvCbJnB6j3y4Zw1QRWlWSXiCAUYXmMpeNQmXxj7IGjiV09eeqrOrorsunTxN0TwDAreKrGkwdT+9MesyoqMHq5cvz2jbhgkLXdm+S3zQ4mgwEWPia9jhyMA8mNm+lTE6dJ4BZJy4er85bxTMZHr2tihI+pusyowZg7ocmnenGzkanrH3rfUxtl1UNKPolSHrDzSt9uCM8DKfOp9/XLaxEj0ePPDqBcxzFDInXIvoNgfkBEqNskJJEniYAjHUgYIb+nyVKbOAh6koyjXK2SivqiCZaOY5pY7ea1zStLHsOFhl5AR2TDLwkn42Oq1G06USVXbaH1ICndgK9cnkBTQA3eeXgmhjy6Ju5wXBv41mGk+OpeVRwWVgwla1K/fGKuCp+kV7X00ZMBqgsfFZmUNVrk551nKKyQAmv4W+ZQQTt+dAYNpvNXanwX8DReyUI/nQQIhQjGKKEqKl9DttohIAHyXP8KhPelUln6dgI6uB3chJOS6fgRXR9NvmUDd72v9BbTP5dyasaoyrlHKZRPPPMRLSej5DuEgLmkYmvRJ2lz4D0XO0G2qVx6emzjcmZp6QpPBEFPooe3eghfr7bXXwA1jq+1uBmt4QtvJxCC49DwWcRMYKNBkEDGmKbGO+Nu9EVAO2HRp6SMQzDLRcB8jdQnfqI/iJPoi8nycq14Nb5XTqLKU8CrdZOn/uvZci2CWBbqNlcF3dX/xGKBwobbdcOlfb1Lp4Pgp0nBJ8jva8KxvfG7eV/oucrMOo0uPLXQeKH4eTkeYIHPwZcXCAQH6C6+ErSOXEDPWtbaId+a3oPhaGehjw9jWTrwsYDEifkzDvE0ugLUbRyi8I/g6mp07bFcff1nPGzqD2vQH2Qs8aUJo4dmkgeE9g+IgTujeO21IFp5gjgbhDH8laZMkvIKnkimH9CDL23EKU3kDFsrj1GTmItkmQnyECST4cx3ceZ4Fzi5nIrZRiMLRRrTECkbUpZpEcP0uT5BnIuv97rnbgPxuMgGUQiON1P4rdR4mWi76fI8nwJ3EYZJ4hjcRZ6yTs4iPMzIpztBpj5IsBSD9wbdzk0m3M8gZcSCdKrkGGDvUTsDnoiDVBiot1odE/hovETpLxXiyw2W599IfTJ3hQEcHMcw0Njz1l6CRfiN7OsVI3AuKyNr0J9r8MJgiTZKZj/Li74/MDxfCz9J41SWoJal2eGJ/We8uCNdPncbGiXeudw3GvNLqWdxY+B25S5lA9BALF3CRnb36GkeUpN+t1g6k6yu20LbgApfwZg+nskWWPT2oQEDispJAfp6hb9ERnJ7Zzhb1GeeQEbIANSlWJC9iU4QrPQ7waNuSuot18dry5I+7AE40bRBKoBMkJVg0iNoXFOjPEvkZ5/km5zYyg7bJeGjXuI5TeI5bc9ZHvTFI97nljwvKTDApasyaTKRxIi8jBsxEePhlTqA/mDdPBnNIYZXoIxTcmP0hPepwOHwB0cGy1GxIMqAc6mm4B4HJM9HjYaupiKpliE/oCwNSsLcpPRHUIPMQ2EOJHhAMxBv0y5l1ha+Y4gp6YyYPEAYtIzZUjJCyFrLPnSKhm2KRa8DCcHYirgcSrofHYn8BhsLmR10ethEoTEF2EVZKy7/2SGZhFvafmn7uskh78O64PhIE6ehPSMDmYGEeE4xeTJ21opan8Uic/0f5CI7BrQkk6JHnteLzDq7/sEsiXzY+qdAqluxPwgIe3LgdIxqrkHGAMafbYT/nOpIM8mG3lT0Jz+i2Yw89nl5QeL6p5brsfA9YDYtQoS4SuI5uthaEwFJ9V8jqXiwzR9uNf3xaFOJ1yNYVG66jF5FKbAtImfCqbFBL0iRw0leaJkF3saDhSUzeWwz4HyqBnai+C6OVQUyMYpTopaHEGU8FkLB9CAQg2FbvBBQvucQO8IPZadYD2HdwyYok/Euwy8vYHPD0dR1E8GtVw4OpVfi+4V1cN6YVB+tOmsqF1X7ZBqf9CnOTn4ZJAvj/3ouVT2b8J47LiqHkwxON2osQKcnO0qDa6fp5DC7UqbKIIyL0uypRVRWilA75DPxV3pqCwmuWVruJUB+wJHWID+vmIHPhlZilKRq4DiDNLvxaI/C+gvzgrYQ8b//4mizjYaE/8G4OgywNjqe17f6iIwB0vbtHmIxqVvvzn1TJrNkWeY9vGQ72c8/BBy/+960ZF7ZL5Yqnx8j0xZY9BXhh2VpawiCvKMEFziJfrqY40OK1R8F9DiBI7lE5VWSqVU5CF7H028+HZYnSBPIgr6sop1GKVMZGn0kghWu7B5Bs7Ve3HJh5a0OoODXnfq4KaD3DnxFq81eWfaWf0njW8V/iXlm6Y/RyccZegKrkj85LOw0qJpdrdRlLn/W9ZehqE7uljO+9xIvZARVibrSJMIuI1mEe9Lukv7KOQ0ucanjGeKMJEGYcJosTbeidg8SyB/EcVUXyhNEoUEzqRp++8GTXE87sLfwmh/yeVS78HwfNgny6bMaiW2kOMbSZhLB0/2owjeHUWX/AXAVXnQf72vslWN9w0LQwrvkE43I4BsAKzbsaqWTwUXnIjCd4ehu0pTrFXYJFi312mAjabnwsPqJRjwXOTrt0UBOxCCXwqntt4UrRy/Fca39NSRdT2Q0sLnCVhZONxf74H1LHDYQLaJopkgOXZpuxetkgzQG8Tf3aGdxYFk7Po2iU7h9i/QQuISx/Qn+rzFjADvjWE49S2KXZInPLLY4gpZ3qLVsDxTVqGNxrYdguEF/RkSHKSp1N81guaHB8aQweg0Sj9QUnf5TTxswpsOgMxh2JhpOIodPcQymlWgiuF23SKzBjiiOxc8JvxUxnUDPd3xT5/imZ7n5bDVGWpLGi4GpYqn7pqvrN2pUNQeTHWgyYBLlHBzFj/NcomLRRL/hlwFL6ALFtlcQkwmsMgGzIPsJYm8Tdjq3KX+9b8835gHLMQYLU+RQeVp4mV6PqTX7S7c75MzBv0F1GTA8FJS3KuhP+sVUN7udH1leleZq3ESHWlaiN4e8ovmBnLeQfGAv11ZOXjEQtzE3NSxVXdVz1tUILUQeUpMXqK6oMANvIqMbtm+KRuYZFXfxS7Kr3aUKh29yLi61gGHYmNryuOmF3uUSjcMpvox8eVKmkbDWSy9fSPYDRUHc73q07AcKFwk/pLGrwcH6FNkEJ4bCvY06BuBIr1r8dgRPmVgk7MMhIarQm6cVPoA5Ubbhb8+Tc3T9LapPgcw0G7HR25E9D4CkDtBfJrmiZcAbPdsOAZ5dZ0LBuYOqlXMxASFUJ9IiaeD9F45/wJZ6f2GApmMkOm6qCKF4ZlOhxuK1+V8LHgpwK3BsIr5i3iob8XkgAU4feg4eaoWuUpFFYY/NDwrw60LOk+9M5pkw4J7V351wbS5W6e/BiiWaMZ0FRnBv4VsF0IGO7jwf8tvTf+IFc+sAwdYHunEUK2stn6lPy/TuyqDhValKtDbCBTQz+oHefpt+t07fIZ4eqsVb4Xqs4hh+Uw7zMcK32ikLfqR+/AmAdnXGAi5MVn3UoqMm02YsjwmOsb8pIEOsmzKUiaDrTGYRqosOAzuUNTA1gvroWMqv97Q3A2Afq/v+ksr87Xx3Ai9mehWSXeBgLyVbhI1/hJT9olBGpWTX4TCe5vcpFzAr8jY2EDXZRVwKb/NHlTt41VBN/Rq2hhEUbJCs9bvUfbVQc4wweQ0qL6dcMjD6TUjWskJ6erUTFIBdwwCl5vRWOsDTZeRQ1mw1la5deM2RXxMMdRNgjr9Yl2xqlE8rzR/EU+XTlagQyzjXTQltvGsGFeWr8DK7xMdXfYEfpTG0BtyGkIkr4ii6G0w2knL2oRrvdhCMnWgbj2sp25MoNZNUdw1oyFQHCc2PYXqur4C4LoqzFC+m0zWkEa8h2DjDcj6gRZVyEOstnr1fww8vKriJMLJLnhpvLebLFwNjH0QhhvkcUKw9NlBa+YyGF/sqgu1RsCHIWyEHRkdcBnrQvFrk+vemE0OogjoagrkWxsizl/dqrIy6AJ63KIMuJpP0CiR9F8TVIO16wWurZatcVuD9W41yvgMNmZrbMb2IeIIzvB+ZIFPlSl/UPUkY1ccs4dy8jZmD8DIomjTcp06U18EGGM4aCfZrg3Ge5/lGD6B0n6K7n0h+FOpcn8VpqZ+FVZWDoNdLyP9Duygr8KqMlbFqdrvTFBVbrVd1tn+NMRDgaeIfKBBSEIIDsajA5c6DdfDYmN8mYPgBBNUqdIgwgLH3lFwA1flmoKo1XFpUYXx2BRDdKWDBc/0JOGAV8avDpxMz8BFjz9oTwWNl8Vtaj0yo8vzXq93D6Std1Nn/dYgnQnBXuwn7C0AW2bBPuAgOLWp6VIZtCRhTt9wvQxpaLH3IoPrwlfHzWiHoTdHqY+ny5nssRAPrq4eyXesu9i2Md6OMcRGgIANwl6SJ3s44FRxhQXYYxWuwWVZsi7zLcfIjoO+76yIl5YuN+D7qYKjr5jb/tStI+Or7B1MgOPoCI9GvZRARkPfmGqSpUhWMOTfDNDroSqeAoWqERYaNkORg21rTtGULIM4PnwbIf8lXd4+eCTfzniHN5W+YJAlLeBZB0TJM33/qN5Pq7bnwn5unlmNyGPzkG35tX6wuyk8/znEZnd2i0CeN5cHisRQbFMKwckggt+bpDVueYBhBClGI8/GXVDQnqtg6gAmQXV6aMBRn0uIvWgYXHUqvCYX1+4tIFnyfHqk/nkFf8zwq+JAqyW3QAnVxa8H8VDI/Nf0xwqe2fKrdB9GULWqTwpIPcVRtPQpciSuHKYJMYsxvioMJx8Ho9NMFeoUyMlzHUDVuoeSZ2aG2WAuTPxzENqvLZ8RGo3jzwSeksct8lcRb2QCvwj9gcaFjknPYwfEqvPsNUzGJzCV9jBbtEgsxHUmtoKq+/TUBmGiodNXcfoGcjASkSmJVgKIDDyrGsZCPIqnnuo3kqcAm15CeeJWvZM7RgAZX01jthsZPEoI65YBYU8bGQhJnt1kZJ9IZbl3I+KbBNer3q2qH5NMVUZ+Wz4suXelk+MaGz+MDrImHlUNk47bAZ58ADzvQrq7HPqvmf04Z/g9yN5syfLIDqzvgy3p0Msmz6dA1rxN7CVeezboW+zXm3gOHYn+WSNrAkC/nJElf4n8o9Bszj0zgfRdhHEe9OfKiSf8L/WipZvBYL8KYMzO2A6IHUnzOE5xqVTMzmNLLfmK6FQZCW00EYoV14ETI1Nmk2F2gRG80ZfUZYK4hP7/v0kdcX8IxHV7TSJlqWBigiI9Z9DdRFHWYkLiLKLzrqBx4jjAF/NXKusD0gopiAcA5q5MugtfAxjZ1uSiV70OyhqrqHiPIz/2vFV5VulUhTTlQaYhzr+Ps94lID+nQQ0HhXzvdvbWKFr8FIwu1lTVU7khETBNDN5MbeJyqkeaP9y9PoMoIKQ+sIg4852oy/8dYOUIWA34sFh0wfyJiYlmu5293RhqGYxIa0nzzUajdzrZ1PNSEVycCiHfYb5o8HAJmfe+wIs/2OsNJCySviTNNzzUkRgZ+8lBclkDBUdhXBurC34Gnshe4YmhviF0lUJust22GWG1+gIP29V2+nuV2CjZ+kNCRBZb6vZ66BvE9XhNrp6eazsTDrMjm8Gz5TPOkmpCRqcVxZ9fbeJ7QK40k1Wi+nk0mcXfDMMtd0TRCenVqF6iKksRXVs+Pa1FA+WzN+SQVoUzLRJ9Ghrx9dQijjhgefIchIj7Px80Zo6TPWlCFcBokgM7l+zqj1CI/Jx+s4Rj5EDcRoPLlxt++hfLyytHYQPqzXfKI0QLKszvfxDAReXOWtdqSKOrLCxVUYvFUe6fhCg7hIyHyNGzrmcny9SDjbPWciFtH8lHHmfpKdQuwB3TXEGM2rF1yaHQ3LDBNKvwRVg80QimP5JG+FRKuhz6cePzBKZvo/nfn0C3uxeqOQlVHRHZJjai/iT4IE/FF+IhWPtkRVkdShsiT8m6qF9hFY+jk9uf+6Ep+ZfQXHwfha4+4zP82PbO3Pf2Rntl+VyMYelg52IQQyFwgkR6WBtEUtfJOfoL8WryRt+dMk8u7wtfrH8fYpryVVq930Wx2pdTRb8csm0EVaBfv7KhIIqPUn0dIDl7sM5d+zQ3COV3LMBLv0ddauO/17J+2JxZgB1KN2bboLe8vNefnPkTTPBM6tyPIQOxhXrUa0L0r4nU93E3HHCF2sQnyAbdCPL7KqL6KfmjIAKiuSoQ74HuxDEo7HajkTcA2JD4pTwNGYHx1GOre2FvLkC+vmBGcQSpHL1ytTn8dBMYTZn7ixdcywcGXO4gYAE/58aWWwExwO454Ku81GmHdYFH3z4gjU6vtyg/ZJUtLiWwUbDzNj9cvoCMUE+Z9Kurebo+x3SbHRCL+Km4u/R96J/SG4D7NFXVjT59y4PiqOV3eXUMwbxIUlQPZeDSVpiFn3pvkk2FqrG9/Ll+aIqEKFld+pIfTn2YVtF+G+TqKIVfOHjvDIKZfXG89A0YLY8oKRto8ps7PYoutdkvR72lT0K/TYQKfRUXtXRbWdX0REuz4aT04E4q9zXk6i1Shw2NpcklGX0mBv9voYsLqEfuIVpnkZF/JY+T3UFr5uq4430I4IT8jIYH45uyRUlZRtqQzSDCGoE0IPerCcOVYeFp+XQ8tDwHi0AKrxEhS6cNBN5gqgkBxRC7ozTL+KGBbw5Fp52QLuamABbktyQ4VDXg5vIJaB2bJ39Tbn4vGkXVTq406CG5FFNPRq3zUTOGjQP9qLgRxhYYtJnCspuME5TQTBWZoETmIgNtSi+KeeoGsghMukmSBv5VENNsQIg39ynzPbQK/XaI528BOLoCTgPD8MRsNMg+FpNJ+1/eyxccN9rTV1fIh2XWFiNjSv12I0h/d2UlW4QxnaUIMC7/8H5qamprNxZPIM/wOZT4WtLfbkreLTg8N2gJP+7AX0E/NMCguG/b9DRSGNCEGEKrJQIqWz8IKjAA8wk5+b2w0bGArXG54Er/x6NiNYSMKwinKbNLbGZks6nhtBtbZ1I7dVEDVXGKjcD4AbHCLnYGTPhcjr76tIg5/pkGufyZLoNtUy4aolW5XsFApyjNBK5tTH1mO8xBfQ5QX6Yi3jn0dbm8fJQ68yfIa7sbBoZdQPLCMEzfDnBOWICvwLK+Z7Ywv5dNc0H1ykz1rR/M6vJnlXV0ZiV3YnBYWUG9LasvKujXI/dkSI8mvdV/j3vLv4PgvRuGx6wJmr3yX/LCiRdo8pTVXd73VH68NP5FlUeda7gqVNTBywLmJkFFAY5pdNZButJN9CCNOl7iyMcWT9ANWR9ROHkt+ahu29ytj3qqHvu/HSdjbdEbWm8UWcr2EWIBT5NO7W3HG+Ot5ucF+FUNIljGFZO3p4MpRGDSsUv9m2jrMNR90lu6ChiTHk3fgxc4T/HjFwXBUXnEXtVPNBTNZnT+eX7TvSmvCz0j9B0JXQ3LaMGtMrD14pngfeQpfnyQxshGPRqZf5mWr6wMeZ/IB/1MbD3WoXcAGBzsMAHjBkoX2kQrT1NfB9I7pCgQVh1JuEG2BlHbQgSTlLNOAd0iXqDwAIBK0yKdvqoDLMmvjoAugDVlAxjtBGpjQS3dBDZDXFU/Oj1RwsvlXnvkkq+Up5ru0rGq0Mw7YNcT3c9QHOzTMDCKQvCngJe8EyYmtsPG8HLF28h6qOpIoAFXHd3MNufIkRXO+RfJ6sqDMvrtFtlFpLsdUD4QmmQe5ncwiD6tMkN/2415Clelw5jyVq2UYboXwBRdnUZ/Efp8VcsLjnyMtPNfhwNibWW3eWImnlWgTMc2sMljrHcHvi681TwmD9WGU/RnyW584DrY2Nqw6b4qPWN6t9u9D3nw/5Gn87XBs4DWTl/h8+ANADvyzfllRqVO+7HVg7DQdqwHI42qUMRj5N7H6FYqwBWQx0QFP8NP/YuhaOZSzDf7dZkyy09Z5vsQbUqTYJsyF+HUhb6xmki205VsPD3kxhhiVV7rlU0tb63XkgqgSgfXwVYPVTwgteMU46RGPDdcc7716JAbaJfxrKtnVxmzvhRFJ24lTv9InuIDg/QGKe+XwzB6maMcwjHNlEfUSKtYD6LOQ6d66PV6B8g2yVcg+3FYWoVGLuRp2XVCHENwsKYjMcSHD+wkr5XDo6XfStpbwbVNoq5Qdzr0MIT/0MVYTz2sx0jWwa29D1GDYYeP4+ZHQHj/NqQr8HTBkhdMT0/PQ+b9oOmwgvXy30jY6IHaFVYEwwMwMIikkAmKJs6U8CmV1XZA7JCQ6L+72AIxtmpqWyEtCpoXgVDol8XfRHgifAxMRU+UfCjzEeLWduTrykcCd4iFuJQz52nLaz4gtphP0ZYfZsFxgUr6MeJXPyC2Tpsp64S2xYK8HnL9uS6a5TopqiWE4no2wKFVkbb+EXz/UsJ8csZMpK/pRPxGuvwzosiz97DG+QCY20SRbCYcE/56+m6ZfgBG9VSnHvpEBB6Vc+UBxVDw7BwAte2b2nJh+2YFQuf4DRq1JsHNXS7fSlIORfjDZyxILyNVPosu5SELd3DwXA6uNQVsXXBc6Lngb5Irh6UJNYlWKVtV2kX3dekUpdt4upSxOMhvxnGB/qpz0vkq440/p7u8DdPU2X9j2Nr6Kugvai6PotU6INYlr63/2tqCnn+Yp8YBsZXrAVNf6mWwUi+3FWET7PKb+I3lK1py71teT9mHWA7rmfroCtQBBzKJ2VmKFzTS55CzLOWK0IPre7O9B8CNj35fJ06jPisrc1m5XKFqLFRCvjpfBa+KvOud6m7AAOE8/oqK6a7Pi3Dy9mWrB/k82zMaRv6VNMy/f80o8gs4j38bGT4Bqn2LpW47UdNc4otF6YNV5jX7qOTPf9FAqwjU5wNcr0u2KX8fg2xBttahylUU/zSWk5VlEtIkojWGaNsGUsa4DKyVsnMnNBMP3iRS8g77Ku8IebbcfufTsm1gLIvDKnNesWX7ME8WFBn5omc6qFudVPz1GjGVRl3PsK6RKuvotjxV61Hd4+ayUowrcPCoJ+D9dHfTIF0ayvPIt5Pvtp9VQiNvu/m1CxTVpb4FTW8LajzOtS6KjGrOywbGPoa4kIr8E6QgAoFDg1hHnqw85Zs6hSdXmZuKQKrgepDZNj3UO4F6X9bJ1irk1eAtdOFlJPXrof9ZVBlc+Z5oN/Zr+VVZyjqgqmxhoFMEaoMBAz81Hyh8xvN2nPjp9HUcjoknX1/SX9nTGzS3/NkarG1jtxGQXBvQ3jQA+95SF7lM+IoYQ7F4CV9VH8JSPgHlOnEFmwHWeWftqNdbfIA8q/cisLsHz5uU4VzKtXWUzNgBsUVyku+Asj7Uk2n0sgKYdZSCwWjAeBlK20QBIIyXwaQj06CU0NPlnAQT/izAbqgAQvsbvuJlqrgMPFq/IKvThPFOmP/mr/yUGRS15do6NMC4wcigtaV1pvhK742xEK8lp+2x2RMP9jEOf9le6j0IZr4CCsoG5vLY8ExQRLvMyJflseEV4QScCeo806cAzNIiU3sw1VJPKsrjSXpafq/Hm/J0j+rlqPTC5XKJWoe6iBTr9mSQi2I62+gvZeO0VB4uaSkt0yxKQ1/wEbGsacnj06it7qaOvBQW0y5Kz5/JtJDKe0gaE/WsTVewtQ+bAYnSaPkzGE5dQtGs34X+DM4voVsmE2MinU2nqU0sL68AbG3UrwdTnuOyXvTPitQBm27sAy/KFXixSFeyTfoISCvzESvDs/DNQP94du7iK0Yp24cYKLhlo57+zCVNhwDmYLLVg+nmNGxJOOyKofNTJNUraArbfyeTkXeYwifnmvDFNoxNl0WBnFAi03oavUmHdXVQASdvr+J0xOR1fpMdIYNAHZh5bmQKi4+ZI468nYjmx6HbvReKZaFFAPZ0vzlDeXq+7I/F/MrTUH6LhM1+Neosyjc7EnNmSkLvHOL7DuqkTJ7QXEy7KL3/DAWnxcToLgYzX+r1lu6H8sMy6hqEEc/MZ8kHU2icJ4R4DdTbKaBQzk49f5Efe4+G5oz8QmeJXlzSxBr1tPX5OO58A8zMYZ1QSKDXwyRosuOif9KVzxnfChPRLA2bbagJpSdm97fdDPOZYiK60LICQ9hO/lsKbCsHnJgAfyEGnxbIGUzCOMiTMegZjyDkPZikbiz3YJ1NXC/uJLCHrmnEhCnAkVWsfyaD+FcHDmzuOYiGbTcuMaHqBraV5cSsZH0U144g9655A5wzSN43U6MfGOMNORN0EFYRi34C3yFrdK+egWYR8lN/uV6kZ/ZMwnj6RskgINtSIV/Lkvv11BPXtPYo5PTydzeSL+nyRppy3kO3MiwTa3zVU1sqkra2C5RvsXiN8MNE9Kl0f4ZC34PRMnMbjbV2lH3t72U0cX5J/9GGtIncU5T85eHBFoOo6oe56qhCvFZ+J54fpAFYHpknjyic8dPoYmogCwD11hQcDovEWTn09kdM3DJ2lpkGk9vgVJ56zxBdIY3Y6V3GT+t2YZp8DA9lha70p1tqaxgsR0mNefSfPNIrAJHtzJNGUBa0oTQfjgH8K3aDP+4txvdAfXBUvJCyyBhO5iWT4LPgcChGDWBC4BRZt2xPBU1KtlJUROra3pDk8WeIM/Sb78OQedd5AKiNF0yRx9K0yCGnqupK6IYdBjoEZFQH26l8hxS22UsDc7mA0C9/CBsJCNuo0zVGE4VcaJTfV85escOsffANLW/aY9f5LfFeGtt+D/rDpfTHJokvGbhpBH0njiqdEBMk9ylK0ua0iUwkMWl+EpCO4plBvw0pH+lrko0cNr9u6LTJRNwl1g5pPo98plc3m6fd0e0e3As1wOGAWPg6BXn/jDpqRHzv9/3mPUnSAxhfQGk0t8GTKOrxOgHpc0jErTRGTXExOOIRlAm3GMUWwkANNKtJVIjeNZTtSyyCT68sxjcr8oJ2bR19NQnUOKhxruD7cH8q2HuJ9y7KMI/IvkIVS6PPkjo9LuIHMKpPE46ATmcRG61/o3DIUarUnTTTvNHn4t5k9BDO0fhrr3ect1ofp8TbaXo3h4Cbcap1xpMjrpIu7kj7Dsbo6TC8dRNi908hqyLcuDNzcyYIVDZ2zSCWN9RpkgQP+B7+Mcu+cYP6aUPr58vEFNG9nXr2HemIa9U7zljjQ1ywb1G/2EEZv9cLk2PKJ7hsi5XqQKq2B/2erhcWks7k3wcNuUjGdtP8iQZMOBwguzqBxY5GL2+LsvwxuRXX0qM/JNlOR46bMYMayEhxKw+v0tIzeaIwOuyn3p/QYPEYahRHKCOtni+ujuKP9N2i2J+pH0lYZsCu4IzJTxScT5mO0cP7PY93DHRNNPV+iAhFb0/0R/lUIaAyEVreueYW9os0k/+d7L2LKoBjfCOSbIUawCI9WqSmfpTWLb+LafCZzlL8TYW3D2srUC5em7qipTbaIqUVbWExHUZpy6sbRH2rRBEfFc9Fts0E0+Cx7mBRBVB3NJzM8qt1pu+2UPOooMvnHgYZn9uiRRYTnMz6kCDL5fqhLNUpqfqmCsBoX+caXfq7kGzCLeoKuW5oUaExpsMyV1o1HCpjU2Hla24dGhHkwY07Qb5fLEcrhJTSc+HkF97lfb5tk2fXnGIRmMUC5YnBS+QSHOX9mM095Jvc0ZiDGxfeSOm/P4xpqyvboBRYLawJqjYU3ZMETQdl9EyKFzX4qHio4dhobgaojdbUNk4WuOh+o6GsvC4dWt2mpsYBEUaPysvveQFdYZCraHDfTBCGa1N71h0D9VeCre8KsA/Cap3Q7y1xBZpjUGYQdataVOm0Cg4tzDZywz66/jRh308Y++lXfjJwlTy9WP7FCRlIGYyU83Ck8EJC/6LsJfaswTDGYsbaMU3R4oUFiLoLZCx/v3Q0VBVUB1QDawojAIzrwFQpKjBLmiFwMOSjNxj1mesoWjTtUPOonoZu5Men6KN0ihpZFTlNBt4Gel6Xdpnnt9FwAZs+qxplVpFHnq57hzaa+gC5WfUABXl1WU3tSVhoFM3UAMq9TpVeWf0YdaRO3/RM3MDQNk2QeVuNrfA0DOE06DQfpHjKPc1md4EMmoz+bsTSli3GYPKq9GtdSfqo6tqQ9I5o8p4B7F6gTaai5zYjXQSuBlFPN5VFHQwk6PWg61bvACZeKq6pHlzwTAbRhmeYWhXy1DuTPvC51B2AvW2q+YRFJlvd60bmZNaDDq71oKbpXvJG14OpP6v91GTbxkD9RgJANS8rF4hlR3JVw3Oha7t35aEqmsHoaFSVXo7HDPRN9y5goqHyejiA7oXoZdR1a8uLFtoueGjAs3ngRfcustr0rvOsW/9leLayARTrc7PrASx4LvVQR9a69WDKv2anHgEj1DWIjyh1HGyN2wV+EPWwEYPhZkJdPo/UQzGfR/ruI/AIbCDU7cB1+DzSce2wafVgs5im+bkr6LEmF1BjHnUaQpWle1OcwZUnh/EYRxWeANV0WgdvveUDqFYHKo5pFfXhBLlu6mz32Ci+LvnUuBxAvTZzsvpuHZ6u+jDhQE0+Tn23TpyiCBCqVwQ6ptWlZcqz3o6AGi2XvHV4Y8m9C78qe9+q6iSnr8ZUTxbUkdV0v5ky19Vn3TbjEit0xa2DV7U/VOWxnvI41bdXkEFAPeF1AVzzihp4EuqswtYxNBL0lbyqstbxfuvoxbS6V5ZfX82r6pWov7bGaCuLzh8MuDb84fFZBtyqA36Rrk17Xk0gDPe21V10wK9jqEw0yvK4tJkiuqY2YMLX+XBwkzdPN60iF/HTn2ER3ma941jHWNgadRnoUzUXGq5vtpSBul3BBqpMG8XXFVyMqRqqyMtiOVGmlEfewIvyqKBuXC+SUe8I+nQ3f6ZugjcdRycMODofE1/Tth2bnCpwh3xq+8hl8hS+rgO+WlbVa+fgVlYX2dQ2ksume4hQQlevB1vIzkRP1afqSZvKWDTI5rTH5C3zEFWl6kRsI5lufW3W37XDqTRYRVwTDTXNBgLMHSjHsxleU/6ikdiEo3vLokBGE9jKqtNU93JBozH7aPT9PX6r0UijSL5txA3y5KDVw+Ue7ExCOPVUBsePmzyiQfs5J4QdzRCWl1Uj48GOHQ3w/RaE4QQJ0oRmszFN19HERAjdbn7YLLXVc2gAP4toPmTyuDCcnn4MsvAiD/0ZzuP8I+Yj5QR7G6Yy7AxhaSvxWUjGZR/cX3hhQDIGsLRk8mwG+fYQjYd0I648l6+XzVKe46mSJ+PTarV2gt/Yw4LmNj4ztQidTm8o32i7BDB72pLGGeA3n8CCxvapieZKr9frwGidE97uELayFgTBhNQ3/TUznU9N+cRTH1Cy38nJye2ChU/yGsEWHm87AbAcK7L1jeM55wRwfGteNq3cxBPOlvWnxCp3NmCLN0FyTJLgDZie9qHd7il8jfai2ZzbBb73eA+DWarrI2A+zFbhPXJttR9Fo53J4qrGwMV9tnUmU6W6dPA6xtQmLwP7KGIaCFw8IZMOXGRUcVwMoq1cRek6zey30Zh5DAd8KyDKb9rGgCIEzpcFgw8lneWvw1pHMm1mzWgGk6deAnH314XHZkEkf5Z0V67S+VJ/25WK8F2A3qRI4g8kycrVlOwFwewlwsOXIojHgHxtc1gGnBCI+xNg74XOsQfDMDxf+FNP5yk/mPYW5Mfdhx8VC8OtFxKbn+Feej4KPExlmCZhjxDNjwzKoJdb1xGZ4+kno/BfB0J0qaR/H8cLt1F6Ty1zMDGxB0TwJvnCKQrvf2bfVR49joxs5cyLOLLXCpHelPSW3w/9o6jWeE9OnhqkjReDiPy4t/JBSuv28WbPThHeTDLvzmgiygMLBKT+lXGcfhpg8QSYF67Emo7ndiXAiQac26fBEAUHkYbXNuPePy/D8rEMZ25u1u+KtxPWZQiM9MUHdHGKCO0lvM8nneM3wOAILflJ1E6P/TwyuAiywzuEND4TyMNPRtGR/zUoA7Hd0Qpa7Z8Xcewlyeqfw8gLGVOnhk32Kyn6N6Wd4/8syxJMzD0OuXiVkEf9CXaC5CAaYo4k7ngMPhO1lz+r6RcnJiZOjxL28+D5T0CRfW0zIMnlG8AfSrqLXwYzFG3MNmY0/QGYDZFtZNRxoSCfCkWeGhjouRoaG42iNF2eOga4Sn4TTpn+TLg6FHmlQz79Ed97iwD+OuBxAGlyA/BUduAnA/d+2/enn1JAf0iTY/tsshA/A2n6MrItP2biy3njMmq0byJD8XrE9NJBMnkS/HEg+Kvo7ynEv0FykEFOmoJHE5hEzdbglGbOcbdIk5chpD8qrUde/qmp07YJSN4pWPJqTMWCEMkdkLCHvBRfhoL9Gkxtl5+aKAtr+NQxLyXZfpZ08csCkxdRmn6sFYqEvVBw8QtE6HUpJGeDIeTEuf8sWUa6/PkwnD5N10MY4ykC+UtJF/JbKf2jyrZsmU0RyRjzt5BtmhGJuIlo3Ef2cBd4vT8IAv/FOXmD7APa2yfJAv40CvELZFfmiMbNpK97yVbsFH73D7pBM//4PbR63iQZ3rfS4PV84D2yoVLvyQTpvMWk/kV7OHOcgZmt3ch7HSJ/K9E7DdL4RsGTg6Sn3dzrvdMLp16a6wdgtUGW6TXAxE+ANhVuNOJZLvhbmUifNaDtYcLPpzL+NMnxFJIjJRlayKHJUvZiwfGdfmNW5h2+7CHba5z6/4kM9k9QW6FhKb6VBtdDIOJn0gDyK2F4ygUAtV6PHIJLDLGuESqipwKHzYMi2UUNnDKoU5Y6ODYZK8keRTQ6+/xZCPhfmw32D8vL0oPYE/itOy8jw/hxCNkLaXz+WqmMPDt2rEeNMqJOPSW9wW63uw+UKVwsMq/le9QXzoH+Nz5yZI4Y3kKN+qo4Xn0/rHmkmfdDaQMPAeUJSCcEoPyGRu55TEdp55lkjJ8EnH0giRb/aICbNIOttyUQ/6Qftd9EBP4G+p6aHTArw3fJ19hJntDFJDUZxM5xJQcTDHcwLuTB/jeQzjowOiCxqampU7pJSjqAg/RkP3mK8lDbO1X9IbKYPJsTkH02s6+fcLX7XM78p5O39kHPm/rvUbT/QdI7I4N6rgD2b9yPn0i++8dh1GMdqetGY/lZKfhPp8tPet7kH0bRAfkVStZoTJ+TCvwUGdbLiMYnKG0ZybrRONNFkX4kjru/DH3DrA7MwxhyNwyeRmxfj+B93PPiv6J63UvJ5CzP/0WU9q5gzHsVVca/QOYNeil5eVJn/rh6ybPkcJiILuZJKTD51by7aDD6ZBy3/xr6Z2qmjcbW56QQ/SZleRv5vXeQFPdLhCTxL6bB5Kcp/T1J77z/BnC9bAd+ozH5pVSk/5lmFO+gafmvkJOrH3nGLddj8MO8+fNkbbJ9+AIGT6DGOOMz75N9Yyjh+jjpiHuoO3yTPI0dYTh1kQOlvkeB4hZq8M1YsAvVh0kCO0nR59AfGT5Bsb2RQ4b70z7O8yObZGfsG9j+r9aAUYl7NraTx/YM6mw3AetdN8ibGVD0xRVkYO6l7M8DcHilVMjP7UrjRVNugY9vNPwJ5SmjaeOc5E2dbkUaE0X2HPxuLGhKzeU89Up6cDflJo+ldXoZayr5mcSixYFf3ensP5YnR9EyeT9wNaK3RKPKfDEN8iaBNUkXRONAbsh5r7csQwdX00xggQYq9dBYKXs+sETa33AWyJGfS2XeTYX6/MAYSojb7aNHSWf3EJl5aiPnQdafWPmAjNpMqK/BvI7jvszedSA8GjzF+WHIs7qjqfKOlMElhHAXzQJukO10gBf1eqtforo+RLc0o+Gmula3hRXavB9mg1jXC9xoj/kHAVTvW2codjdPluhAp3Pi4CB90MFXVsmJuLZ/Ori4tJRadnJ1Bl9myCbJZI1MtRGbZ9PUSNKR8bz9NAlu6BTIpKorqk6Qpuk80d1DlfH9pOvfoj6jMu0jX+4+Yn4peUkzI7yMdSh8kR1dJ+QHy3iK7FHKw2YnQoq3gYxPSj6G07F30LTbfzZdkBOJHyOdfI+0+UTfF+eACyA0ydBKOdXvtqyQ/Xg3S+KPUoGWSwgIaQyoDPIEcfWg4FUU0XuIxkfIoB3TkErCUTtbwNIdMlaH2Lt7KGkfyOPDP2UM3+156WIfl9d1MDSP8sgKtdDDNMJK45bZqDgWZ9IAcyFx+Y4nkns1WWg2ntLgJ5dmls4E88zXtpYwJshGe0l63LEqblW8Ojgq1JWzDm7d8tXlBQbcTIYg6J0lwE8p6H63CZcDu4emjs/mMd9hoDHKx8vMmTzn8htkSHdTVmn8ZEPOPBDycE5DSFo0/bsPsoUTVD1Esmmc4lbetuxrgdMUK+I8WJV0VwPyEhdMpyVlsvjQbCUIZ9DaAS2wrBzT5JQLHzTFTr2U+VvBAUQ2dcQHaGq+SJ3vIvLK7iBDJKeeU/SUQguMvBP+DcojjbCmD79BKT9KF9emveV/w9bWJyFP30pT5Gsp7eoivsTvOlL4k8n4/UIz2Nb0G51/XVlZkSuncRSt3KxktcVCZdrXSKD/i67e1AzmYy/s/Ovq6qr83kJEcLtiI7OZEQ0WCdWLNJ6enOoLuU4khNdu++T9LsnwAm80Fs/kwp+gWN3tnU4nVXhlv0myfF2SqLJxk3zqYpaeLp/Ij4u01WHAb05dTsJcQk+uiSIvGwhoArGF2iPFZPFmz/OWFVky+tSOH6L2fFDEWWx30M6si5IAlva80QZRXcEpC2TrULXj66tFJ3P6q/KuwreKQbStFlcBm05pQZXJD3MkNB1SVnaHPDkFeBYpFwOGkyX8B2Wi9V3mH6WAO3lRPjXcneRd7qeV0fmpFGPyfmi6DPIDBN7IKSXkU5BNE5NE4QlB03up7BgRLUAGtJopmmJf0s28ytVR3t3B9QTR6tCCAJdTWH31lYL02EMmTpD3QAbNuF91pLPShK9FJd5LKXeQlbrAj8VZ1N8foKnmZEIdlKKd1zH0GMWxnjxY68llwkZj4RQq3ByZd6lPHpCnSS7UpPDCM2iCqcglxhbt4rjzzTAMPkVP/t+Edd+aJOxRtOr9hQCSfZ3OFHlfR9pQ0j8oBndDiLNEg/9hwqK3Jqm3i2j8W4jp/e12g/R3YhnU/iIgEuidG7bmXtpL5Kdr5WRWTHgTcE/a3vEVgANtMkIt8CgEALKNTPKsGmgBqNXtym/4UNNBMTCgg0Er+3QraOXLdCwNLoy1Gwo5Ul1TbHaXXMmOouZcytJttLD2Dsq9FRj7vbU4rvxuDzZISLLNTP/QmPROKaYreuSxTqf27+qobTy/HwEfRhuGmkloBISWR8UxGb98RZpp9MRoQUb4gQUHLTRV2dDCx7aFBpX0PI0ZZOBgV6SpzCbZBYxPB/VNraDRLEpXr9W9dupz03RojaYQ4SBnBGBc6Mq+dQujH4/S5RnVg+DUYPF2Sj3dby5cTMbs2iBon0cjN0294HqQiynZ9JorcaTsGywyXncGJS+RVZI0AxKgx4SQU6ZvK+XqQ1d+v70LSaPHsj4FnmXgbcu+IZdB1IHfZtSlFkM5PRTypHZIX8JEa4fkQyvHTVmmgPuL2Y6bIPJGaW2dJs/xYrIHD9JStFxMklP2FT+c+j7RnJNbRdrt9kNWvvQbRf5ng5acCuLTSPvPoaSfjcHfHzS7fzfbnf+no3B02SL/sL1HUXhF0Orto5XqH6VQyLOpLl4fCf9Q0Ig/PNmb+9ACLKwtLGFW7+fQqPFsxjP904gGW2iEmoQtna/CiYz04GNhMr6bLW5h0OGvibn3RsKX8vikma97YvrDFKu8s//t7sRWRlM6TSr4PA1cv9VN4dU0FIYU095BcpBxw3cn3UXpXY9++hUFPWOJhZ6EAOz906S3oSz0x3woN4Cs5LnKWN+SY9vrZzNeoNHTf1WaUIBjMkS63KjhqHRtco8alVG+UJBuujYNCKjJUqYXVVaVZpHc+bMkQxUjG35hSMfPjGG+yGGjM2q85dfpGNxI07/HUlN/EqXIhY7H09MZ6pzyE6Lyq64j8R0PBBk/tkiO4k2CRx+Ve8qkN0AEKYzH5bTR9I3djK+XeJSJFwwqTUrn8muPpq1iWruTM0YRMsaOxsBuC4TYQd7lqVIDHD2KJ4pDnHWOpamYRflNdAWazfZ8IoInk8f0IGfym9jZyvpELPBWMrC7ehHpAOChnM8aexWOL8Ud+AatHtzvp/x6ms5eDF7wBNLpry80+AwtMcl9fbEmf17WwcboIytE41vkzd3v++n1pOpL0PP3UM63t0Nvkkzgu6G/WEVjBMXnePJdD+P3cs4oXAHM80SDp/5BOLHaWaONg03xfX154N+TMLwiM0xcPBOQPZZiJTJudzeMfMB+KFtfWJSzdND1Lz+hS4tUyed5mnyMdD9NJomaCj6fcl9MHu4Tk87yd6G/z7HfL4T8EmXimXjA2kDueiC16gxl976BqDAwsY+qa3lcFmhMHbPIuJmem7xCGx1Tui0faDKKCjhgySsK6OvGy4Tnoht9+uciqyCv4Dj3yFggm4fxOvHIclHMhjw6nk2pVX6mQUEmy97QoAZ8vR9Oy31hcj/ie8gAnkcz76m4e/b1wcTdjwMQIwaR+PjEZ5kikN9KEvJMCmQeXsmPoXblBJzHKONP/ZXFfEo81AGDYCqF7gzRX4TSBRvpmdLyANGEaPGYaEztp+jjZIhTF1BPvpCefj3qrT7ghSGVIRADFtl/acpOIeP5XLpZZOC/AJtbHp8KPk3G7BzAdA/pWG7y/py1OM3mbvJCpyheeCuQJ5n0jeeXG2z6XOrZ7yMaLyZX7Pok6X5FQVbrISEDfGaaepIGeWqrhyi2J+OH1zTY7NlE4y8Ei1/kNxo3JL3eFRIBs4UtfhvFF6Vst2VEsqFP+XQgS5flZj+K/Z46AfN+G44CrctIGeSf5zcmqdLxMlrRmITRcMB4G+yC3GgkhzvFU6exiolFWoX6pyiNPjb4oiNFY2fvIwK/Izj/WRpayOPu7CeDSoKJVRq0ZqFFA29HV2QW2pkgX1b6tjG4w8igrjai/KFpNC17DjA6Bcz/bLR0nlUMjv6SvQ10umV8VJkKNsCWggvfXAf68zo64Y44I3xoerVP7tWAzPvZqa2azlOgD88mDyCmTnFAwQfDdQ6yccvpSkKLGYfo5uxGY/5MZGyGxuvlbJtEnH1MzOTNeRSrnIbibzmP8URcbZOxup+6IRn1yVP1fKkXbyFunPnieBEdjY0sQ0SW+kriQBE0eDX14vM8xr4Dci+jYOoKeX/RKAh3kNE4i54l8hvZNBu9lOKWZ5GxoA4M88iCwbYUCb2xMqUYvlww/9do6j2VFy3L2Vum6S//AMiVYsQLVRz9micTLxHM+2WYPmNWZdDrLe6n6fz7ieQqpOyxCqr0/ka2FoE20PV6vQdFttLNdvNm0lB49v8ETlMgcYIM9iDs4vUdI0R91kJRjswI6w5YVvcUhRjZUhQwaaTxu1TmXY1G/5vY5DEfo8a6ny52hKmn7hroE5JvWgk8hfmeDFno+xBHZLHA0CBuJKgjdKUtFJskxyNgBi6naNTgyFDx02E6H+H7MD0dNsjdu4RmOdSh2V2uRHNrxjgeJtfhBIfoeTQdJrrRrWu5EDYKYloQImp3kI09Mwj4meozGaSnMpxCJvjOXpLo025r+/D6HmxC0005VSPjiM8kHjtF4t05yELrJcN+Iz0Rj7yo8yjPUT9t/FEcnfL2ZrD69omW9/Y4avwSE96VZCd3Aa3kKrxzyJTBk/hssi5Pg5bc5jQyO6H1exb0N41jBwqARpqzaUHlRxvR0jyMDiy0KEu+GcqN7djTsUqgTSU9Jpg4I2XilNFHexh5w2eTF7wDhxvtDyXk7ZG8bKQ9SWiIhtTZBLWGBOyzzgw6Ha/XjxWulSP2+GFqj3LF/wLGm9sGyUNvk2ztGTT2+U1vQuaJleeqoS91iH6Y9yHWNZpVPdqHL6T8u3Lu50fLbwJlZS6Oows5ihfRyH2QVi+/40Bp0PC8rOEJL9pHGqJpj3gzQ7mXDL/Vz0brifJb9pmRHEI2SyFfVb6bnJbzEGsxwyjaz5n3OeL1HOEFL1QzdyPxWgrYP5XK97+oh62ASxmYDCT2d14kPe8b1NFPJ3bPgMyj7p7oCyvUA1HSRqNxjvwYO5X1+5BEd8u3JJaX4djionz3+MgKpzidXL/2YpQxVSa/KKmUu88426yO0wFP5Ot8QyMwNTU1SXXwE9l2lkC+5WMHIToPUTh1OkXxKlD24dHA0KLV8dfKDeM03bxxWFbyawWMhEOM/UGk8e0k30GeijcQsaEnFwT3XEQGWL5PPC298D5N6NGFXGw5p9GYPisnkf3H4DLit50j5t56rse8ThXI3kSSscTW0IJ3u/cTxrdIWXu4zy9XaTcaM8+nJvU4UsLXl5cPrNU1LWaF4dSPe42J5w1mEKV9t2jbjYB6w7mLe2rDqYqn4qPh2gWvCk9dmZvFR8dVY46uOGX8RByLj/tNtoX69WuD5uxjKLh9ixDJjgQ6F9Fs8ZsUT/8MlOtTyLc8IDOo2S/ZqdV7KSD+Leom1Dn51+J4VXZEiscLX8gtNmkWBczl4wLTs8nQ/DqGzYsgn0ILQVMxPOyh+CRN3e7IGKGQm5fpT+RGYznt8KtYQ3yRPITnheH0JBmgg+AHc9TFXsRS9r0gCP4uiZaXNJn12LM0hHLVnaaQ2co2Sg8a+GRASw0U+Ofk4a4O+iajFWcxNSgzWfLwaVSqy1DwD3Zhua3Q79eBF3+DcJ7MBH8N9fJrQH6XHLNtRo1cDlrM+GgqYCsZ8Dd5E9MXsjS5XaQ42UvYuZSFPN3gr+PO0vUG2YdlSPz0E74It5Gsr6a63E0pt4qUN7ox0nQdd3vCf18vWfqagpKSEflJPwwPknyzg3qkspHBQnE9xRq/luk3al/DGlveQ6vnPxNwfC80Jr8p0nSGykVeLTtCVusQ2dqZXC6anv+jjEunkL43DCe+I0T6ING/gOKMFHtl/0qO6lUDAWgRh4dkQMnoj7QH0tsyDSazUp7zAs7m42zVn9z2VXF90MB/4Bg/LWhM/A/KeofwvK2pSJ9LYZqbqaL+GJQNl34kdvHAex2NYYfCMHkwirK4qtoGxvqUbFjqeXTqH1jSi/5Mr8i44uaCsRq4UEPuqjxQkQ8rlhMc+NrSoQIv3eMv4RcvN8Opu6jznUYN+UnUkJ+CGOwif+YwLXX8ftJeyr1Dr4AvtcnJLUywLQzZFyjwL2M4sYfNmMkN2QI/maZdGbQPA6/RQO7NkUNxS5rG34fMY2o2Ef3TqWM9BiE4nwyb/DuP4m6XkhOzlWPzOzxp06opm2DQahK9e1Kf30Vu7MAT6HV5K/wGS8Uu6uAvp252Jgn1JIT022RI/oQWAe4byJmvpud1qO6e8NBrbvV40BEsvYWn8b1ZuVg4gxjeT6s+n6Vy7QUZH8VwG2OBQE9cx+PeAR9nzqWBo0FW7Z953JVvuSSgtBHeai0FaSA3dmOaRtcmyUQaeP6p5K09yNPoG1JXaZoeD/xgL834Hk0eF60K+48H36OYIZ8kf/p9c93gn9rQlh3dt9ZlkpwI/Ma95EzupPsnUurjacX2QpKNYpriw5M99uEuuVmyrHE87/ks3orgPRohvIT0fW6mdxZcQjqfp5GLVtN9qrNIGvgOT6fuZD60kMudA+xZtPp9CqbsABXyXxh43yKdLfIk2i+LK9LoDmThAhP+02i6f75Afw/RPotRvUGA/zVuL39vqHNy4RiwEDG9idrDHWqdIGvOUbxgBoLmV3icb1mKujydvI4xfBTxfR5VwkUUErmI2ut9Pgv+nOKlN661bZr5cDZLdKg88CA55t9PSEcA6hFo4/3D1InWA9mIP2BYla6oiffDAHU8THWDfBHgdtjebE+3W3HsTTHmR9Ntb/EQHJIdUD0XsAD2eFu33tc6fvwsivtcP9ims8fvp20lz+ruwTTxcrYD7gwPwES6lrbH2wb7GvFc7GdbMwYgN/L6vp8ePbqrO3iJ39sJO/390KRy3a0eYNtvMzt2NKaWlqaoDNO+H66utsQqHD2qb2g2tc3BYHyhvwNO+Afg9HjAj2A3uVyr/hE4szcoF8p827cfDQ4d2hn1850TbNu2GBw5kuUxTfmR5CZPiOMBONDN7+WD/bBfjenRcv98qzfda8QxI0PsxZ0WLMLx4/k73S51z7bBtmZ3upvTSAY0pK57SnlhB+xotOfaoa5zGqH4xPGJmGSLRnW3M5yeXpxIkqBFA2c6Pe0tHTo0ncjoIK2Ti9GyX+hv2XKg1et55LHHTc9rrE6t4sqgTSnnFu7xt8P+8BBIOndrK8PnBPPzC6FS/0PYTfVydOroTJL4E54XdBuNtH38+MVU11fpQVGPyhmQ0RWD8uRTe30T/xCKDKI+VXKZiqpzdIT6HVilIQzpOk+Vn3B47jrF1nnrchXREAaeOuTPuZZfp6PzZTBaVr2STfVgMqo6b4BxOZkmS56m4qQaTT0Ekr/GhxpdrtG1gQfjuwuYhisMdNX2reu4qC3l8S390FEPRsuq3w+9E4VeWdlMbcRUF+pMw1QP+kKmqc5z3SC4LXqqJ3frcgCMt8u8nkxy2+yJXham8USFLrfQ1dPya71P6C9p6DgjJ2bbKkPfmK0+06HMANoKYTNitjSVjjDksT1X04oMlU5PvTd1qDJ5i/iYjL+NTp6vjL4LnTytyECU0cobrm4IVFnVhqmv+KmNVAWTwTe1LXVgMulFP+8TCvLqUyi1M4HlWu/kNiNtkls3nHqZoQAXDXwElNeDmk81sKrsOp7Kx2Rk9fZjk8NEy2RcQZGnaJA21Z2tDxhmBGbIRwBTQYsMYFFFF4GLEdJBb2QudGzPTRVUBraKdC2DS74qNE36WA/o9V8EtvZgM1h6XlO9uNaDiZbNGy0ySEWy2oyl+jyHOu1S56N3YJOBt+ED1KsH3TjqNIvAZLSxIK0I1lMPAOOGXJTwUq+tefMgrWk0zJnYrK4JeI3n66W5UThFUMUA1oEqg8Rm7O90pbleHdTlU2XwEQ55cB34eVvYzHookqGqQ2HCdx2ENrvN160H9dmG1oMH/3FhIyqrLo3NbCj/keFk63O9hqEqlHktZc9cwXX6vB4ZRA28qvJsNL0cqi68OnuI/5EN4g8KXKYDj8DmwyP18B8fTmb9ORnfh8vG7PXwrMOvbtlUPnVlPVk6rRunWw9UlfMHUQ/rrQMX0HdKuK7olk2ZsSJN3TNywbHt5jCBUHBMr+PZeJoWZFxjgGp82OSxm8J+ZTSHYDKIqoCqwFWhimIBzEHfIjApsoynXrb1Qt0FlrqGdD06PRlQ1QhvZD24wEYM1vLXg7m56akkCUT/rRkhv7kAK34MsCA3jKtbjGR+6mdbJ6amogblH9s8v7o6QThHVhX6wfT09GySJPINDiRI2+22fNtGzUM0tzWnpjqtAU2Zj694XgyLi1IG9RXBvNwkw9SUflhrhrcSRAAn5L7Nsr2nantvDa7Vb8yo5c7KQrqahDT1YNkjvSyswtpHrNT+g1neLVtaU3Ecrqw0iebRjqJLk13KT9kiObbR75F87yzAqDG2TZnHbF/eyUygb6dwbbx1vRl1tHEBPbitVkYZ5IrMedfpUCoNV56g4FfhKWri5OAqZ11eAOMDlI2GSYd1PEudRp5u42kbcIsGGb2N9T2hqalTg1jIr7+dRffyFbxUAMrvn9zns/BfO53j+1V8+YGkmHsvQMHPp3wzMHJytZhhvPEPveT4FTn97HOa2H0zB7wMskNy8SGB+Ldpb/nzMNwbObslDPnTicNTBYj81bkO0d+HvndlvLogPz0gjcNwb6DfnH02CvFKzWnzoP8N56/HXU4yZJ8uKGovuc6x2Zx8VoJhJ+mcuE55ptaFaDZnz0pF+kJ5IhEKeIj08znSzwOKPmFAzw/DqcdQvqdTWc9igDcHXvql1dXV/CP0DMZfNsjqvtmcegZHf4sHvW93Op0HB7zV/Yw2j103yKjuQ9RB7ximjqI3LP0eoNjQmRowangmGYRGI8/HHGVX6Zg8YZvsplFNpwmG8ghDWukbJJoMNr5gkcVEywZFsqvPdcOl69CEb6oDk85EAR6AvbzCkKbjYcE9GOgDmI1khhcC7BYseBdVYUhd6B4yJgv0KGTAnpoK8XI/bEZp0rt1jUZwHjDvJwWwXQjeUYHefsLp0t8qMhYx1vp+kqzso4x+MDEhv0fzTgHeucDYFwnvJqJ9BrkuT/f8ZoMnc7eToxhDE7cjhi8SAp5JNB4SjN0N8nRVhLOpu7/V8/0mT2P56uXQW2V+i4y4eAPx/Qb9HSbZpQxt+ltmzN+XxmIvQK8D5nqQoG66DtBv/SETbHuadr+k4VC+C4MwjF7JUbyN/K7TKVmernRpCvzVPiP9pL1bFT1T3snXcPR+RyBrkI7klxmflHD2ahYEB3gS7YNxh6J/Pzs7R+b8/yfdPkWk/Oucx4dhfJpe5CGqbXj4CQGwIICa2fALWr6yX1MHECV0iuRASx6b/DYQjr82XN0DKeOn4tmMmClNFORTR0XTc10utMih4ujXej5bPZhks+GChZ6K5+IBmtJsHUHnAWBulznvEVwhvTYBj6Lk63wQf+95STuOYRsZr0vIS/w9keKvNptz3+p2F7KOLLLDYmEOUTwoIPlU0vW/22zC7ICLp3wNrwkJ/hp5SI+lWex74s7yRygtDsPp8zniB8i7+4NGQ1zZ68E9g8MlpgFFj4vks2n31CsbjeM7ExE/DjE4A8F/U9CcORp3lz48LLAQO8ibbGKafDyeDO+lSenw7MSuF9FUdnlF0wGM6mJ2i+/3LpKGDVhwXvZRekw/rOXNjFGjcWg3F/AOAXyRZP1TJvAAQHg+QvqnnMHPAsx8GWBJHtybNhrTL0gZ+yXS1LLH0y8FQXJtlOCrSfVvpnK8IQzD41EU3aTVXfZ9F3+VS4P7PPmxNOF5E8rRsC59UM8nfLAbJEURhfe5leUmxRju1YbILDShhKcJXGTN+ZfhlpXFhmsyWKIEBx3xbGVTO6xNThN9G18dz3QNUPD6UwnvMp55Ht37c8XVZdPvc9o2vqIEN/9tA8OHup2F+wb38lOu3w+a0y1Kf0siUurQIA93lcddyUPPVsn2HUyyz3muLHS7sGDgHxKhZ1Lez8Xd5Q/miVG0fHvQmP0QGbNfBT+ekG8lN8liJiDkOdRHPZHcl8LeLhlK+QXFu6en/Wu6MXxWHr9G9x+FPK7GMEHOj8dx+wFYaC90QZGhHwW0ORjZs2YTZxNoXk4G/uVkXXf0n+Kx8WLMzXGMnkzT9wmaAv/3tLv674MHt4ThlseQDXxhEKQvpUHkYyCn+WnjCSRAi4ngrVG0dEsUZTr/QBDMLAkmfg2BXUz3qkHMXpf0u8njqEyvlFNxkvzb0D+azaV9qOUbgar7eWxEq2yO1E+mrlKA9fCti1ME65F/o2jUxdfxXOmYdCgs+BvFw9UQmvBM9e0iq41+Bn3LkXXA0W8Ap+mNlH6z/CYIxfonRvFo8YPzsIg+ZnKg9P5G+iaD7lXk4f12iI3sG9r5Qoo8MEh+C0YRC5eXl49x4HtRsBmYmJ/X5GdQ/JqeVbZud+IwFfYfyHC9jnHxY4RwB2HN6Rmbze4WYvRoMuy3oUiOqDxSSAiHLVJB5end/W1/TNyNgF9uNBJ5OvuwvsijlmcryqPZvHEezd308xTyyG8lw38jeaOLoH2eQgHng6s3wiA+Ao+AS0z04QR1ZUXD/UhaHOM+Wng+SuZqd7M5YqhkR1yFXu9IAf2UDMUdZOB+1GtMjxx42+v17iRP8YsrKwdPWGQZFUyIfZSjF8QRTe1zgyINuDx9G0wH5ubGsgAOtCkMcH8UHbtNfrtFcHEM+x+qGwH5+VIyYqdQiVcxTUdOK0cW9z1mkN9Y7ssVRr0vehj/JRnyoce6BbaEnOEeujzKuRgxqvK/FIIfQ44vodjhBymFFpBQhjFsOtGPwLPCZuxDrAtFU9oyvKo4qP3WwdWvy3BMcTQXqKMXW3zMlVcVHDWvftJMFX6uOOvBU/NW3cKU45pCRsqz1QVy8FbJhZsTkB9kizEZCHn47OVh2JqlKedecvDkMfu0FsIORSy9NjsRWk5c0f9vROU3aIHmj7zG7NMFT26lmN23sg9QjX6BUJdlNC2FBfKXlqmUW6DfzxPBGcmV7vTDid9AkR4hGeS2GbkQEyN6VxCP2xQ6NlDaFGeKDRrGYCPE2AfsCBTnA59sKTNzwbh/Cv13NuENzz9cgZXDVHK5GBL4vv8UxMkLKB5xKYjkdNLPX0fp3NWwdrYrrVzP7UoBn0TP70l6S1f7jelLGdJCV3H/ynWTh5iM7bRsHyLA+g8TMFWc/lxfBi/DsdGpIweW5CmSpYqseT5XHL0eJLhsEbE9c60HURHHZpxsx7ip93paWVsz4dlkLbu34dWFnE488MJy2nJzWyrkqiyIszkG85RwjJ5I71F+lvWuIOV3EtL9EjfpLl7pN6cSIfA/U75XCPkZUYAnh+H81Z7XvKbT2S8PS9U3QRvaMJdxNsl37dQY5PLbLE0yus+jNRlaXc76vzzQsEt8boI1g1hUD5phEeM67vUOiVbjBppWvxKZ/0xKk19TZNMEvZ7/I0KkuyjnnQpePpD66E1cTO7ja7no7SZy99D1fWQMV2GtjB6tJL+dFnVChviHGV5KYQjfl6EG3cgVDZwmW4OmObcouS8DUSKULX8VHNBwXLwSPZalLugUNQBhuC4zviYaakC+jvdkSzM9MxmNKvXgiqPm0b1gUYNOHRmr5FXru25dlgHRzr4VPTxLsR/jE9IAfckT8GnGvO+naTQttzAylnS78RRNCTtDTzPprnx169atN6ys4BnA4ssI/+cE9n48+2711Pb/AiuHDvfMAbOxAQbVuKcQU2RgDtPFfwow3pem3nQ/X0NELX4g2/Y9TscGRYPWUiDwmwkKindGL6bV7rsp9a5uBJcJTM6W25TIdMUGWpGH+Pk0xa8Jhs8inJeSXf/FIJh8b/4ZimZz9lE0WlxCSr2511uSi0ikRNHoz8JF2f7JHNQBZaQc+Sqz/hC135wAQnlD0umpXlFRXvW+SmM1GWA05LHJYZNV9ZjUstsUCzCuI5vxs41kJrlN12XlKzOGJnx0wDEZP1P7sRlJ9d4Epro03eug1kMRT1N703c/6NcqmNqOlm9bk/p1CzRvW75tQt4grch27+10luTGbZpOr+gy5bKkx48flwsKt9PfQ43GzNe5wN8SyF/gxe0rU/nhrP4X9Ar0IrflZIszygG2jNEiRy9gfG+73Tmwhr8iz+Q21U9ZPQhNJcN66HYXH/Rb0++kHK+gTD9Fi0zyM6IPIvArCU3Kri4uDelJPPrdRwvVe722uJ8WVv4EmCc3mUuDeEoq0l+hctCsnN9CDucpUYRbaQFpnsIQWxDZGTAxsQ3a7cMw/sEyl7Yk1O+kmhRS1EBMOCaDoOYtuoYCHmDgA2CW1VhQsCtCFPwW0QQol9mmkzLjXSaryQAVVjSYoUwOqCBbTs8kE0B9XRbd257VwXMpP5bRabVWtsa8IT2vo9IIanl4L/ukaAaphhs2GvO7U5a+HOLO15Oke+3g2QJ5QgueN/EvGPgX02qs/BDXVdD1esNPM43LKNALT6cY3lbGs+9q972xbGIqeLvdTlSZdVyopj9be+glneXrYHLybi+Kns/QSyh+eacQfkDluIhmt7mxxjCcOl960eQFyq01ff0sLCykMHUNNmCKpt3nDGj6ZFTPIQ9zhtg9tZvgZeTtktPNnohczNPvSwIu311sf4rynlBkKTrecAT0D0fbOprJ6JVti9Dv82mq/qzMoACMj/JQQqeos7oajCqNQs8n/1ziYab9cS58bMZFp1mE78prI6GKDuvgVc1rwtMNuTXz4HvEsYqfpvIjUeJc8uC+0+36+SR0QI8miuNGMgeeYvd0Wqf4A5ro/hndX6s+xIBnew6BVllgpH8Q2tr3lvO2R3FBPJ+8siSKWveTB5gqcqhesV4kNY+aBpZ7sNAJWlu2nM7b/PzeKvtmCqsfTAdqCoLwZ8ibO4uYyFcVs3eaOQtfQ+HNc+n65+hPeVOG+9Ib7P9lsMCE+DAXybm0YCUXqaSHStXAOtJjRsFXKCywCqNlMdkrK/hg9oj0AgrLfZGBMoEeuwMoN0ZVR6wi3i6ge3RVQDXkRSeX2MpfhKPjF9F0gbLpqyl/VT4bueezDlSR1VQPVkC5e06+sbJ16zQcP94F2B5s3w5wfKH7fCJ1mifwqmT0zQ+Un/kMeTod9fvAwL/bQX8HMsPqg39/CulBYI1tsH1mEg4dyj/0xBH9x5LfdwZ6eB/dL0GLz5CUTDpYQuSxQGjQNHKq1+PPo/XfrZAwMqpH1A9t0YVcN5D7IztyBbwxlK1fZilHCu5gGzi8qJ1cQsK9p+EH7+0l8KeQhQh2B4hLzyA7TXG/9Jsw2DBOccVTyYN8Rjg5eU60uioXW8jA72z5zWUqM0fG+YMDum1aCf8EjDobjFbN3wUsPJfo/H3cXbl2rQxbZsJJOJMiBXG0fEyGKVagZLDz4eRD1Y57smE9sj3cy6ZC0UDnkv+HGaRr0qTO+sSgzV+J4WSXY/v0YwvwDOT4ZDI5H+vNtL4Kh5baw/zyg+6QXsxZ42VhGJ432HZD3XlpErzZb8ftxeu73YXjQTj5ZUp8TrDQ+S/QmvkoeT89SJOnkF34OXIwFxnHGyQ9+eqefBOEYnJnC897YYNNn8pB7OpG4nE0dXwt5bkGMfkbUOqMcy692tOChvcSFFMPZTJ4ciGCJpwCDyU9ual85bCrEojYRDYojEPXC+EuEZN0LHoNrZp/l3E4JNiJp9KM/XkI3r/Hnc53YTDweGl6nUD/6SLx/sgLp9830YDruvHiS6l8byTP75YUut9RaKux2YExZyEtqcjvdY+8eRcEvbNFGvyiSPhR0vmHoii6BUrgkQNiH4GNhPV41XXw1jPtr23ceRi2PPQfTR2R4le4VXjsUdSVtnsoI1r4GT/E9yfHjg0Ni++zSYHhTpraNhHYDGfsdDJDZ9JK6s7+d6jZwTTpyH2GUeC3buWMTKrAx1P+C6mITyZjehEZke/7iH9D8UT5XWMOSdj0Q+90KsVWRK+VAjtDIHsU4XjIGBkQ/jdxb+W7qtx+MLmTNHaGkM6t5+3MZAB8lEA8gzw0P/C6e9M0PeGoBpIyeJyHwd0k+9X6w5RcOT9oHCDv7BTi+QwybHvIeD4WGV5HmO/jcfcADMMM8b1+s3GUjP55tOxzQcLxcir3hTS4HPSx+T+i7uJXwf6qKPNY40w5bcaU3cx576Gcru/jNgHhY4n3Egp2M63sH4USQLA3SAH1Gqs6f6+KUxVPxa/KT19VdMUDMK84V8GtAnV0Y4otbjYvrIGfx1pz77MKTzU25MpLla1KfehlnAxarQs5x22eENnreRTIa3vCu0e+dzzIq5ZrKggmzyEDtJ0JPgXKBnby0iT+92lB4Xtr5ZmfDsPV55M/dx7ID7oLeCAI4ApaDDmgyNRoNKZ3pcB3EU1aZPBokYJ3yEd6MG63pRepxg0zVnJDcyyiC72+V6d+wpRz5h1LukiructHoVwnEs8LgolLaGW3O9g0DmBYRKM8jyfv7UUg9xgK2BdPBJ+CxcUTMLpYmtUh6fRJdPUkykfGGu9kwv/KYGuNBE8rU14nrNls7uLcb0aRdxCIuKL3GVqwkQNR0ustS0O5DCXtFGH8dR018IpQ/1BSV7xcISpe1ZHfVVa1bGqDdX0pXN1+xB1l1ctXNAjZZM3vq5RPBZdX1erUQ46j8hYOsprqAcC9zVStB7VsuiFljni5fDp/FfRycBgfPE11rw8MAOby6EYECvLq9WAbPExld2lnAKPnE+ZnFppizbqh1OvBdpqRqk+9Hmx6Uts6t8iuyj2C77Ixe7PhZPODH7AMrp2/jkzrKcdG66Bq2dSOUtYZXQaUjYIieYQlvylPWdlMBs1kUExymXDB4Rlosun3RbJiQT7dWLkM4qjhqs+hRA4TLRf9AWj8TB+qH1nB0Z7ZKrto1MESQWwjpvrMhGNToImP7r3oigQYn0YJCw000NPz6PSgQEabJ1BUvjJ927wFG9ie6/VgauiqTkxy2uqyaG+YXn7d6zDVA0C5rAB23SKUd2Q00MESujq+Ke/IKdMw3i5MnV5PL6sH/b7oEGQTPdM9QHk96Pcu9aBeC8s1lODYvEZb/8/SPAujog6lN04EKD1yXKcpDGk6Dhry67IIKDc6Op5NIbb8AuwjkSm/jgtQ3LhtNNQ0ALuBMOUzdWT11yavCbDgmSjJY9OZqT2peYoMtG5UdF3baIKGZ5NT5wcGXFEgb9FrpGWGw2acTHlNcqIDX1sbqFoPJlnXWw+uYKoHm4EFKO+7Q1x1bm4yMvqIBYP8+tlxQnlmMlDqyG56ba3IqNnib2V4RQZCB5vxMhkjE5+yCtCfqWm6Pop46WXX66fIqKk01fPhXMG0ibxOgy4zGLqspvsynVYBm5GrQ9PFMOmDUFF9F8lpolEGKo269WDr+zY8/boMTPWgphfh1AWjDpnywCUIv9mgCqjLVqUBsIJ7W5rpOVbMnwOD6vp0wXEpWxkPLLivArZ6MemtKI+NdhHPIjlc8lSBOnVZBjaDVIfPestWpx7WAyerHlxsWyaHvg9xvZZ2M6HuiGOjY5uWlOGZRuoyvKrynqx62CidFulElNxvlGdXxMOEVwfq1GVdqMNnvZ5yXbz1GMu65dyUPlVUGAGbMyrYeEmousVHxa0qq+tUReeV68x1/9t6+Ok8XXFNU8AqeFXrvigE4IpXVS9VcdWyVd37qOdz1WneTgCqbUOrU3emtllFTpVOFajTrlW5XOtAb5uuZTPRt/L8317zmkUBV+cEAAAAAElFTkSuQmCC"
  },
  "soulan": {
    label: "Soulan",
    src: "data:image/png;base64,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"
  },
  "brasfort": {
    label: "Brasfort",
    src: "data:image/png;base64,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"
  },
  "crescimentum": {
    label: "Crescimentum",
    src: "data:image/png;base64,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"
  },
  "minascopy": {
    label: "Minascopy",
    src: "data:image/webp;base64,UklGRgADAABXRUJQVlA4WAoAAAAQAAAAvAAAIwAAQUxQSKECAAABkBXZdh07B4IYRBAMQRDMIGZwxcBiMMNAw8BhIAiGcCAIwq6yj7ZOXveR/EQEBAFu2zYHoMMr0Kj7B/lvp/CeExVHeM8DnOH9jh798nudM9j73u3Ib3etdXF1SRd7jRfPWldOqhvjrdbIOz2OprdaO/JQKOzHqVZnq4lm2mCtXCU6RhVqfZsBQMOMHcB20ZAuFMB3yobK1g3AMSncdRCAPL4OdFQHMp2phy7UBTMlCSeU+G5xhjkNj9lOAtqE12UviqJIrHBPvF8PpvyTjjT2Htg83cMbWhgKLXjgh1hPMid2JI6ivCZ8K8DuY4Pex0dWOp2m9iIS0IXrhWVYY4LtMUUiVAbTOJA8OfRAkyly20M0VzQU0qhwtnqR0CYUJJsRYg9krkhcyIGDsEKjA8mXHTxMgwU9jJUPmclDiIsJgdkD8RAnQZHZKm7iQbbLUyK62UnPsUjoqGnUMocNTINMkdjRRmaFzbXxhAbxImkYv0hFFQ+DOezZgfytrgqqFn2sQBYH0oCCYyPaO4oQ4/5YP/JEG2ZEoxdJHTuFflrGSdYpl1KtGnp0EToah/06fVALpOp5x489NB5zI0tHZQTly5XFoyfyDFrfc1hjwSux3c53572RfwpJwGL+GYgLOlzCjl5HNXvLUtJsY1YPq+bbBJb51PxSpEDDDg1uxsHVgYiZHvZBDiJOxtDt9gjL70VOVCCKE+ozG+o4DnKLY3Wr2cQdaVZmE+MBkt9N7EARL9ywN2mYDauZii1vg3Kzb84M1G1WhviJdcxvRzJU3HAb7nsm0nt54wtUbbEjVlCdSYR5GfPbiJFVYC/FGOx9rBirFIMtM69jnrS4XlMLe3fddalZ7DAdsEbvhLjHvMdaOo5i814bJu+23/OIxCXI/3IJAFZQOCA4AAAAsAQAnQEqvQAkAD5tNplJpCMioSDoAIANiWkAAAd2VXy9xp7yb6dOnTp06dN8AAD++5zAAAAAAAA="
  },
  "alianca-global": {
    label: "Aliança Global",
    src: "data:image/png;base64,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"
  },
  "bullla": {
    label: "Bullla",
    src: "data:image/png;base64,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"
  }
};
const clientLogoNames = Object.keys(clientLogoData);
function ClientLogos(_p = {}) {
  const props = {
    ..._p
  };
  const names = props.names;
  const grayscale = props.grayscale !== false;
  const height = props.height ?? 28;
  const gap = props.gap ?? 48;
  const columns = props.columns;
  const list = (Array.isArray(names) && names.length ? names : clientLogoNames).filter(n => clientLogoData[n]);
  const layout = columns ? {
    display: "grid",
    gridTemplateColumns: "repeat(" + columns + ", 1fr)",
    gap,
    alignItems: "center",
    justifyItems: "center"
  } : {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      ...layout,
      ...props.style
    }
  }, list.map(n => /*#__PURE__*/React.createElement("img", {
    key: n,
    src: clientLogoData[n].src,
    alt: clientLogoData[n].label,
    title: clientLogoData[n].label,
    style: {
      height,
      width: "auto",
      maxWidth: "100%",
      objectFit: "contain",
      filter: grayscale ? "grayscale(1)" : "none",
      opacity: grayscale ? 0.62 : 1,
      transition: "opacity .2s ease, filter .2s ease"
    }
  })));
}
Object.assign(__ds_scope, { clientLogoData, clientLogoNames, ClientLogos, __ds_default_components_ClientLogos_ClientLogos_599bxr: ClientLogos });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ClientLogos/ClientLogos.jsx", error: String((e && e.message) || e) }); }

// components/ClientLogos/ClientLogo.jsx
try { (() => {
// A single Ploomes client logo, referenced by key (e.g. "philips", "sankhya").
// See clientLogoData / clientLogoNames in ClientLogos.jsx for the full set.
function ClientLogo(_p = {}) {
  const props = {
    ..._p,
    name: _p.name ?? 'philips'
  };
  const entry = __ds_scope.clientLogoData[props.name] || __ds_scope.clientLogoData.philips;
  const height = props.height ?? 32;
  const grayscale = props.grayscale === true;
  return /*#__PURE__*/React.createElement("img", {
    className: props.className,
    src: entry.src,
    alt: props.title ?? entry.label,
    title: props.title ?? entry.label,
    style: {
      height,
      width: "auto",
      objectFit: "contain",
      filter: grayscale ? "grayscale(1)" : "none",
      ...props.style
    }
  });
}
Object.assign(__ds_scope, { ClientLogo, __ds_default_components_ClientLogos_ClientLogo_1ofemrg: ClientLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ClientLogos/ClientLogo.jsx", error: String((e && e.message) || e) }); }

// components/Eyebrow/Eyebrow.jsx
try { (() => {
/* global React */
// Ploomes — Eyebrow / section label (uppercase brand kicker above section titles).

function Eyebrow({
  children,
  variant = "text",
  color = "var(--ploomes-purple)",
  style
}) {
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color,
    ...style
  };
  if (variant === "pill") {
    return React.createElement("span", {
      style: {
        ...base,
        fontSize: 11,
        padding: "4px 14px",
        borderRadius: "var(--radius-pill)",
        background: "var(--ploo-brand-10)",
        boxShadow: "inset 0 0 0 1px var(--ploo-brand-20)"
      }
    }, children);
  }
  return React.createElement("span", {
    style: base
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
/* global React */
// Ploomes — Input (text field). Border neutral; focus ring = brand purple.

function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = "text",
  iconLeft = null,
  hint,
  error,
  disabled = false,
  size = "md",
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === "sm" ? "8px 12px" : "11px 14px";
  const fs = size === "sm" ? 14 : 15;
  const borderColor = error ? "var(--danger)" : focus ? "var(--ploomes-purple)" : "var(--border-neutral)";
  const ring = focus ? error ? "0 0 0 3px rgba(180,35,24,0.12)" : "0 0 0 3px rgba(132,60,255,0.15)" : "none";
  const field = React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: disabled ? "var(--neutral-100)" : "#fff",
      border: "1px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      padding: pad,
      boxShadow: ring,
      transition: "border-color 140ms ease, box-shadow 140ms ease"
    }
  }, iconLeft ? React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--fg-3)",
      flexShrink: 0
    }
  }, iconLeft) : null, React.createElement("input", {
    type,
    placeholder,
    value,
    defaultValue,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      color: "var(--fg-1)"
    }
  }));
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--fg-1)"
    }
  }, label) : null, field, error ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--danger)"
    }
  }, error) : hint ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/MenuModule/MenuModule.jsx
try { (() => {
// MenuModule — Ploomes sidebar navigation item ("Vertical Menu / Option / Modules").
// Curated, brand-correct primitive (Manrope + tokens + Lucide-style icons) that is the
// proper home for the Figma ".Vertical Menu - Auxiliary / Option / Modules / *" family:
// its named variants (Resumos, Clientes, Processos, Negócios, Documentos, Produtos,
// Relatórios, Administração, Biblioteca) are *label+icon presets* here, not separate
// components. Renders one nav row; compose several inside <SidebarNav> for the rail.

const menuIcon = {
  resumos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1"
  })),
  clientes: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  processos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "21",
    x2: "14",
    y1: "4",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    x2: "3",
    y1: "4",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    x2: "12",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    x2: "3",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    x2: "16",
    y1: "20",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "3",
    y1: "20",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    x2: "16",
    y1: "18",
    y2: "22"
  })),
  negocios: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  documentos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 13H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 17H8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9H8"
  })),
  produtos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m7.5 4.27 9 5.15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.3 7 8.7 5 8.7-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22V12"
  })),
  relatorios: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v18h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 17V9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 17V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 17v-3"
  })),
  administracao: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  biblioteca: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
  }))
};
const MENU_MODULES = {
  resumos: {
    label: "Resumos"
  },
  clientes: {
    label: "Clientes"
  },
  processos: {
    label: "Processos"
  },
  negocios: {
    label: "Negócios"
  },
  documentos: {
    label: "Documentos"
  },
  produtos: {
    label: "Produtos"
  },
  relatorios: {
    label: "Relatórios"
  },
  administracao: {
    label: "Administração"
  },
  biblioteca: {
    label: "Biblioteca"
  }
};
function MenuModule(_p = {}) {
  const props = {
    ..._p
  };
  const preset = props.module ? MENU_MODULES[props.module] : null;
  const label = props.label ?? (preset ? preset.label : "Resumos");
  const active = !!props.active;
  const collapsed = !!props.collapsed;
  const glyph = props.icon ?? menuIcon[props.module] ?? menuIcon.resumos;
  const iconSize = props.iconSize ?? 20;
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: collapsed ? 48 : props.width ?? 208,
    height: 44,
    padding: collapsed ? 0 : "0 14px",
    justifyContent: collapsed ? "center" : "flex-start",
    boxSizing: "border-box",
    borderRadius: "var(--radius-md, 12px)",
    fontFamily: "var(--font-sans)",
    fontWeight: active ? 700 : 500,
    fontSize: 15,
    lineHeight: 1,
    cursor: "pointer",
    userSelect: "none",
    color: active ? "var(--fg-on-brand, #fff)" : "rgba(255,255,255,0.72)",
    background: active ? "var(--ploomes-purple, #843CFF)" : "transparent",
    boxShadow: active ? "var(--shadow-brand)" : "none",
    transition: "background .14s ease, color .14s ease",
    ...props.style
  };
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: wrap,
    role: "button",
    "aria-current": active ? "page" : undefined,
    title: collapsed ? label : undefined,
    onClick: props.onClick,
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.10)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, glyph), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, label));
}
function SidebarNav(_p = {}) {
  const props = {
    ..._p
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: props.className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: props.collapsed ? "16px 12px" : 16,
      width: props.collapsed ? 72 : 240,
      background: "var(--ploomes-ink, #1E0C45)",
      borderRadius: props.radius ?? "var(--radius-lg, 16px)",
      boxSizing: "border-box",
      ...props.style
    }
  }, props.children);
}
Object.assign(__ds_scope, { MENU_MODULES, MenuModule, SidebarNav, __ds_default_components_MenuModule_MenuModule_e49nbz: MenuModule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/MenuModule/MenuModule.jsx", error: String((e && e.message) || e) }); }

// components/Stat/Stat.jsx
try { (() => {
/* global React */
// Ploomes — Stat (big metric + label, e.g. "+3000 · Clientes" stats band).

function Stat({
  value,
  label,
  color = "var(--ploomes-purple)",
  align = "center",
  style
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      gap: 4,
      ...style
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: "clamp(32px, 4vw, 48px)",
      letterSpacing: "-0.02em",
      lineHeight: 1,
      color
    }
  }, value), React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 14,
      color: "var(--fg-2)",
      textAlign: align
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stat/Stat.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
/* global React */
// Ploomes — Tabs. Controlled (value/onChange) or uncontrolled (defaultValue).

function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : items[0] && items[0].id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  const isPill = variant === "pill";
  const wrap = {
    display: "inline-flex",
    gap: isPill ? 6 : 4,
    padding: isPill ? 4 : 0,
    background: isPill ? "var(--ploo-brand-10)" : "transparent",
    borderRadius: isPill ? "var(--radius-pill)" : 0,
    borderBottom: isPill ? "none" : "1px solid var(--border)",
    ...style
  };
  return React.createElement("div", {
    style: wrap
  }, items.map(it => {
    const on = it.id === active;
    const btn = isPill ? {
      background: on ? "#fff" : "transparent",
      color: on ? "var(--ploomes-purple)" : "var(--fg-2)",
      boxShadow: on ? "var(--shadow-sm)" : "none",
      borderRadius: "var(--radius-pill)",
      padding: "8px 16px"
    } : {
      background: "transparent",
      color: on ? "var(--ploomes-purple)" : "var(--fg-2)",
      borderBottom: on ? "2px solid var(--ploomes-purple)" : "2px solid transparent",
      borderRadius: 0,
      padding: "10px 4px",
      marginBottom: -1
    };
    return React.createElement("button", {
      key: it.id,
      onClick: () => select(it.id),
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        transition: "color 140ms ease, background 140ms ease",
        ...btn
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/analytics-view.jsx
try { (() => {
/* global React, Pill, Button, Icon */

function MetricTile({
  label,
  value,
  dot,
  delta,
  fill,
  deltaTone = "success"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "metric"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("span", null, label), delta && /*#__PURE__*/React.createElement(Pill, {
    tone: deltaTone
  }, delta)), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, dot), value), /*#__PURE__*/React.createElement("div", {
    className: "track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fill",
    style: {
      width: fill + "%"
    }
  })));
}
const POINTS = [{
  m: "jan",
  v: 4500
}, {
  m: "fev",
  v: 10500
}, {
  m: "mar",
  v: 8200
}, {
  m: "abr",
  v: 14000
}, {
  m: "abr2",
  v: 17500
}, {
  m: "mai",
  v: 13800
}, {
  m: "jun",
  v: 17000
}, {
  m: "jul",
  v: 24000
}];
function SalesChart() {
  const [hover, setHover] = React.useState(4);
  const W = 760,
    H = 280,
    P = 32;
  const max = 25000;
  const xs = i => P + i / (POINTS.length - 1) * (W - P * 2);
  const ys = v => H - P - v / max * (H - P * 2);
  const path = POINTS.map((p, i) => `${i ? "L" : "M"}${xs(i)},${ys(p.v)}`).join(" ");
  const fill = path + ` L${xs(POINTS.length - 1)},${H - P} L${xs(0)},${H - P} Z`;
  const ticks = [25000, 20000, 15000, 10000, 5000, 0];
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Vendas realizadas nos \xFAltimos meses"), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: H
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "gfill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#843CFF",
    stopOpacity: ".35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#843CFF",
    stopOpacity: "0"
  }))), ticks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: P + 30,
    x2: W - P,
    y1: ys(t),
    y2: ys(t),
    stroke: "#E8E8EE"
  }), /*#__PURE__*/React.createElement("text", {
    x: P,
    y: ys(t) + 4,
    fontSize: "11",
    fill: "#A0A0AE",
    fontFamily: "Manrope"
  }, t / 1000, "k"))), /*#__PURE__*/React.createElement("path", {
    d: fill,
    fill: "url(#gfill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#843CFF",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), POINTS.map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: xs(i),
    cy: ys(p.v),
    r: i === hover ? 8 : 0,
    fill: "#fff",
    stroke: "#843CFF",
    strokeWidth: "3",
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("rect", {
    x: xs(i) - 22,
    y: 0,
    width: 44,
    height: H - P,
    fill: "transparent",
    onMouseEnter: () => setHover(i)
  }), i === hover && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: xs(i),
    x2: xs(i),
    y1: ys(p.v),
    y2: H - P,
    stroke: "#843CFF",
    strokeDasharray: "4 4",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: xs(i) - 40,
    y: ys(p.v) - 44,
    width: "80",
    height: "30",
    rx: "6",
    fill: "#1E0C45"
  }), /*#__PURE__*/React.createElement("text", {
    x: xs(i),
    y: ys(p.v) - 24,
    textAnchor: "middle",
    fill: "#fff",
    fontSize: "13",
    fontWeight: "700",
    fontFamily: "Manrope"
  }, p.v.toLocaleString("pt-BR"))))), POINTS.filter((_, i) => i !== 4).map((p, idx) => {
    const i = idx >= 4 ? idx + 1 : idx;
    return /*#__PURE__*/React.createElement("text", {
      key: i,
      x: xs(i),
      y: H - 8,
      textAnchor: "middle",
      fontSize: "12",
      fill: "#A0A0AE",
      fontFamily: "Manrope"
    }, p.m);
  })));
}
function AnalyticsView() {
  return /*#__PURE__*/React.createElement("div", {
    className: "canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Analytics"), /*#__PURE__*/React.createElement(Pill, {
    tone: "brand"
  }, "\xDAltimos 7 meses"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "cal"
  }, "jul \xB7 2026"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Exportar")), /*#__PURE__*/React.createElement("div", {
    className: "metrics"
  }, /*#__PURE__*/React.createElement(MetricTile, {
    label: "Ticket M\xE9dio no M\xEAs",
    value: "R$ 12.345,00",
    dot: "$",
    delta: "\u25B2 50%",
    fill: 68
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Clientes ativos",
    value: "1,2k",
    delta: "\u25B2 12%",
    fill: 84
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "MRR Atual Real",
    value: "R$ 320k",
    dot: "$",
    delta: "\u25B2 4%",
    fill: 56
  }), /*#__PURE__*/React.createElement(MetricTile, {
    label: "Taxa de convers\xE3o",
    value: "34%",
    delta: "\u25BC 3%",
    fill: 34,
    deltaTone: "danger"
  })), /*#__PURE__*/React.createElement(SalesChart, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Funil do m\xEAs"), [{
    l: "Oportunidades",
    n: 124,
    w: 100
  }, {
    l: "Apresentação",
    n: 72,
    w: 58
  }, {
    l: "Proposta",
    n: 41,
    w: 33
  }, {
    l: "Fechado",
    n: 18,
    w: 14
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      fontSize: 13,
      color: "var(--fg-2)"
    }
  }, r.l), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 10,
      background: "var(--purple-100)",
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.w + "%",
      height: "100%",
      background: "var(--ploomes-purple)",
      borderRadius: 9999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      textAlign: "right",
      fontWeight: 700,
      color: "var(--ploomes-ink)"
    }
  }, r.n)))), /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("h3", null, "Top vendedores"), [{
    n: "Eduardo Lima",
    v: "R$ 142.000,00",
    i: "EL",
    c: "#0EA5E9"
  }, {
    n: "Mariana Novais",
    v: "R$ 118.500,00",
    i: "MN",
    c: "#F472B6"
  }, {
    n: "Ana Silveira",
    v: "R$  96.200,00",
    i: "AS",
    c: "#A78BFA"
  }, {
    n: "João Mello",
    v: "R$  72.400,00",
    i: "JM",
    c: "#843CFF"
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: i < 3 ? "1px solid var(--border)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar-circle",
    style: {
      width: 34,
      height: 34,
      fontSize: 12,
      background: r.c,
      color: "#fff"
    }
  }, r.i), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontWeight: 600,
      color: "var(--ploomes-ink)"
    }
  }, r.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: "var(--ploomes-ink)"
    }
  }, r.v))))));
}
window.AnalyticsView = AnalyticsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/analytics-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/app.jsx
try { (() => {
/* global React, ReactDOM, Sidebar, Topbar, PipelineView, ClientView, AnalyticsView */

function App() {
  const [view, setView] = React.useState("pipeline");
  const [client, setClient] = React.useState("Dynamic Solutions");
  function openClient(name) {
    setClient(name);
    setView("client");
  }
  let crumb, content;
  if (view === "pipeline") {
    crumb = ["CRM", "Pipeline de vendas"];
    content = /*#__PURE__*/React.createElement(PipelineView, {
      onOpenClient: openClient
    });
  } else if (view === "client") {
    crumb = ["CRM", "Pipeline", client];
    content = /*#__PURE__*/React.createElement(ClientView, {
      client: client,
      onBack: () => setView("pipeline")
    });
  } else if (view === "config") {
    crumb = ["Analytics", "Visão geral"];
    content = /*#__PURE__*/React.createElement(AnalyticsView, null);
  } else {
    crumb = ["CRM", view];
    content = /*#__PURE__*/React.createElement("div", {
      className: "canvas"
    }, /*#__PURE__*/React.createElement("div", {
      className: "page-head"
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        textTransform: "capitalize"
      }
    }, view)), /*#__PURE__*/React.createElement("div", {
      className: "card",
      style: {
        padding: 40,
        textAlign: "center",
        color: "var(--fg-3)"
      }
    }, "Este m\xF3dulo \xE9 uma stub neste kit. Use o sidebar para alternar entre", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg-1)"
      }
    }, " Pipeline "), ",", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg-1)"
      }
    }, " Cliente "), " e", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg-1)"
      }
    }, " Analytics "), "."));
  }

  // sidebar uses different ids; map analytics under the sliders icon for now
  const sidebarActive = view === "config" ? "config" : view === "client" ? "pipeline" : view;
  return /*#__PURE__*/React.createElement("div", {
    className: "shell",
    "data-screen-label": `CRM · ${view}`
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: sidebarActive,
    onChange: setView
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    crumb: crumb,
    onNew: () => alert("Novo registro (stub)")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--bg)"
    }
  }, content)));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/client-view.jsx
try { (() => {
/* global React, Avatar, Pill, Button, Icon */

const CHANNELS = [{
  id: "chat",
  icon: "chat",
  label: "Comentário"
}, {
  id: "call",
  icon: "headset",
  label: "Ligação"
}, {
  id: "meet",
  icon: "group",
  label: "Reunião"
}, {
  id: "phone",
  icon: "phone",
  label: "Telefone"
}, {
  id: "mail",
  icon: "mail",
  label: "E-mail"
}, {
  id: "visit",
  icon: "pin",
  label: "Visita"
}, {
  id: "wa",
  icon: "whatsapp",
  label: "WhatsApp"
}];
function Composer({
  onPost
}) {
  const [channel, setChannel] = React.useState("chat");
  const [text, setText] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    className: "composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "channels"
  }, CHANNELS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    title: c.label,
    className: `ch-btn ${channel === c.id ? "active" : ""}`,
    onClick: () => setChannel(c.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 16
  })))), /*#__PURE__*/React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Marque um usu\xE1rio com @"
  }), /*#__PURE__*/React.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "paperclip"
  }, "Anexar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => {
      if (text.trim()) {
        onPost(channel, text);
        setText("");
      }
    }
  }, "Publicar")));
}
function Message({
  ev
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "act-msg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av",
    style: {
      background: ev.av
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, ev.name), ev.channel === "wa" && /*#__PURE__*/React.createElement(Pill, {
    tone: "whatsapp",
    icon: "whatsapp"
  }, "Whatsapp"), ev.channel === "mail" && /*#__PURE__*/React.createElement(Pill, {
    tone: "brand"
  }, "E-mail"), ev.channel === "chat" && /*#__PURE__*/React.createElement(Pill, {
    tone: "neutral"
  }, "Coment\xE1rio"), /*#__PURE__*/React.createElement("span", {
    className: "time"
  }, ev.time)), /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, ev.text), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Visualizar"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chat",
    size: 13
  }), " ", ev.comments || 0), ev.date && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, ev.date))));
}
const SEED_FEED = [{
  id: 1,
  name: "Mariana Novais",
  channel: "wa",
  time: "09:00",
  date: "01/01/2022",
  av: "linear-gradient(135deg,#F472B6,#843CFF)",
  comments: 0,
  text: "Oi Ana, boa tarde. Tudo bem? Acabei de compartilhar no seu e-mail a proposta comercial. Qualquer dúvida, me coloco à disposição."
}, {
  id: 2,
  name: "Eduardo Lima",
  channel: "mail",
  time: "08:42",
  date: "01/01/2022",
  av: "linear-gradient(135deg,#0EA5E9,#1E0C45)",
  comments: 2,
  text: "Enviei o orçamento revisado com os descontos para volume acima de 50 unidades. Posso fechar essa semana?"
}, {
  id: 3,
  name: "Ana Silveira",
  channel: "chat",
  time: "Yesterday",
  av: "linear-gradient(135deg,#A78BFA,#843CFF)",
  comments: 1,
  text: "Marquei reunião para amanhã às 13h00. O cliente confirmou pelo time deles."
}];
function ClientView({
  client,
  onBack
}) {
  const [feed, setFeed] = React.useState(SEED_FEED);
  const [tab, setTab] = React.useState("timeline");
  function post(channel, text) {
    setFeed(f => [{
      id: Date.now(),
      name: "Você",
      channel,
      time: "agora",
      av: "linear-gradient(135deg,#843CFF,#1E0C45)",
      text,
      comments: 0
    }, ...f]);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: onBack
  }, "\u2190 Pipeline"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22
    }
  }, client), /*#__PURE__*/React.createElement(Pill, {
    tone: "warning"
  }, "Prov\xE1vel"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "pencil"
  }, "Editar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "check"
  }, "Marcar como fechado")), /*#__PURE__*/React.createElement("div", {
    className: "client-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: "linear-gradient(135deg,#E0F2FE 0%, #843CFF 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Empresa"), /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, client), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16
  }), " +55 11 4000-1234"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16
  }), " contato@", client.toLowerCase().replace(/[^a-z]/g, ""), ".com.br"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 16
  }), " S\xE3o Paulo \xB7 SP"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "factory",
    size: 16
  }), " Software \xB7 80 funcion\xE1rios"), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-3)",
      fontSize: 12
    }
  }, "Ticket atual"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: "var(--ploomes-ink)",
      fontSize: 18
    }
  }, "R$ 20.000,00"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `tab ${tab === "timeline" ? "active" : ""}`,
    onClick: () => setTab("timeline")
  }, "Linha do tempo"), /*#__PURE__*/React.createElement("button", {
    className: `tab ${tab === "cards" ? "active" : ""}`,
    onClick: () => setTab("cards")
  }, "Cards", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("button", {
    className: `tab ${tab === "proposals" ? "active" : ""}`,
    onClick: () => setTab("proposals")
  }, "Propostas"), /*#__PURE__*/React.createElement("button", {
    className: `tab ${tab === "docs" ? "active" : ""}`,
    onClick: () => setTab("docs")
  }, "Documentos")), tab === "timeline" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Composer, {
    onPost: post
  }), /*#__PURE__*/React.createElement("div", {
    className: "activity"
  }, feed.map(ev => /*#__PURE__*/React.createElement(Message, {
    key: ev.id,
    ev: ev
  })))), tab === "cards" && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 24,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 18
    }
  }, "Oportunidades em aberto")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, [{
    t: "Licença Anual — Plano Pro",
    v: "R$ 20.000,00",
    s: "Provável",
    tone: "warning"
  }, {
    t: "Add-on Analytics",
    v: "R$  6.000,00",
    s: "Oportunidade",
    tone: "neutral"
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "kcard",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, c.t), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, c.v), /*#__PURE__*/React.createElement(Pill, {
    tone: c.tone
  }, c.s)))))), tab === "proposals" && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      marginTop: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "260px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ploomes-purple)",
      padding: 32,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .8,
      letterSpacing: ".1em",
      textTransform: "uppercase"
    }
  }, "Ploomes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-.02em",
      marginTop: 6
    }
  }, "Proposta Comercial")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-3)",
      fontSize: 13,
      marginBottom: 4
    }
  }, "Cliente:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--ploomes-ink)",
      marginBottom: 18
    }
  }, client), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-3)",
      fontSize: 13,
      marginBottom: 4
    }
  }, "Aos cuidados de:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ploomes-ink)",
      marginBottom: 24
    }
  }, "Ana Silveira, Diretora Comercial"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 14,
      boxShadow: "var(--shadow-sm)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "paperclip",
    size: 16,
    style: {
      color: "var(--ploomes-purple)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Proposta.pdf"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-3)"
    }
  }, "Assinaturas:"), /*#__PURE__*/React.createElement(Avatar, {
    size: 22,
    initials: "E",
    color: "#0EA5E9"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: 22,
    initials: "A",
    color: "#F472B6"
  })))))), tab === "docs" && /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 30,
      marginTop: 20,
      textAlign: "center",
      color: "var(--fg-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "doc",
    size: 28,
    style: {
      color: "var(--purple-300)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontWeight: 600,
      color: "var(--fg-1)"
    }
  }, "Nenhum documento ainda"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Arraste arquivos aqui ou clique em ", /*#__PURE__*/React.createElement("b", null, "Novo"), ".")))));
}
window.ClientView = ClientView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/client-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/components.jsx
try { (() => {
/* global React */
// Shared components for the Ploomes CRM kit

const {
  useState
} = React;

/* ---------- Icon ---------- */
// Tiny inline-SVG dictionary — Lucide-derived (1.75 stroke, round caps).
const ICONS = {
  filter: /*#__PURE__*/React.createElement("path", {
    d: "M3 5h18M6 12h12M10 19h4"
  }),
  contact: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21a6 6 0 0 1 12 0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "8",
    width: "7",
    height: "9",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11h3M16 14h3"
  })),
  sliders: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h11M19 6h1M4 12h3M11 12h9M4 18h11M19 18h1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "6",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  })),
  doc: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v6h6M9 14h6M9 17h4"
  })),
  cloud: /*#__PURE__*/React.createElement("path", {
    d: "M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.2 2A4 4 0 0 0 6 18z"
  }),
  gear: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.13.32.31.62.54.88.23.26.5.48.79.65"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 16a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3l1-2V9a5 5 0 1 1 10 0v5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 21a2 2 0 0 0 4 0"
  })),
  cal: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  })),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3-3"
  })),
  chat: /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-7.6-4.7L3 21l1.7-5.4A8.5 8.5 0 1 1 21 11.5z"
  }),
  headset: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 18v-6a9 9 0 0 1 18 0v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 19a2 2 0 0 1-2 2h-1v-7h3v5M3 19a2 2 0 0 0 2 2h1v-7H3v5z"
  })),
  group: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21a7 7 0 0 1 14 0M14 21a5 5 0 0 1 9 0"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 6-10 7L2 6"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  whatsapp: /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12c0 1.7.45 3.32 1.24 4.74L2 22l5.32-1.22A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.07 14.32c-.21.6-1.22 1.13-1.73 1.2-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.65-1.14-4.37-3.81-4.5-3.99-.13-.18-1.08-1.43-1.08-2.73 0-1.3.68-1.94.92-2.2.24-.27.53-.34.7-.34.18 0 .35 0 .5.01.16.01.38-.06.6.45.21.52.72 1.81.78 1.94.06.13.1.28.02.46-.09.18-.13.29-.27.45-.13.16-.28.36-.4.48-.13.13-.27.27-.12.53.15.27.65 1.08 1.4 1.75.96.87 1.78 1.13 2.05 1.27.27.13.42.11.58-.07.16-.18.66-.77.84-1.04.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.45.2.51.31.06.11.06.64-.15 1.24z"
  }),
  factory: /*#__PURE__*/React.createElement("path", {
    d: "M3 21V8m0 0V3h6v5M9 21v-7m6 7V11m0 0V6h6v5m0 0v10"
  }),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  check: /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-11"
  }),
  pencil: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4z"
  })),
  arrowRight: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  }),
  paperclip: /*#__PURE__*/React.createElement("path", {
    d: "m21.4 11-9.6 9.6a5 5 0 0 1-7-7l9.6-9.6a3.5 3.5 0 1 1 5 5l-9.6 9.6a2 2 0 1 1-3-3l8.6-8.6"
  })
};
function Icon({
  name,
  size = 20,
  stroke = 1.75,
  fill = "none",
  style
}) {
  const path = ICONS[name];
  const isFilled = name === "whatsapp";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: isFilled ? "currentColor" : fill,
    stroke: isFilled ? "none" : "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, path);
}

/* ---------- Logo ---------- */
function PloomesMark({
  size = 26,
  color = "#fff"
}) {
  // Re-draw of the two leaves in inline SVG (so it tints by currentColor when needed)
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 496 372",
    width: size,
    height: size,
    fill: color,
    "aria-label": "Ploomes"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M461.94,180.39h-201.94c-38.49,0-75.4-15.37-102.51-42.69L47.93,27.32c-2.95-2.97-.84-8.02,3.34-8.02h217.63c62.38,0,120.95,30,157.39,80.62l44.91,62.38c5.44,7.55.04,18.08-9.26,18.08"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M353.98,219.95h-101.66c-37.01,0-72.49,14.77-98.56,41.04l-80.9,81.51c-2.95,2.97-.84,8.02,3.34,8.02h125.2c39.84,0,77.77-17.12,104.13-46.99l57.01-64.62c6.5-7.37,1.27-18.96-8.56-18.96"
  }));
}

/* ---------- Avatar ---------- */
function Avatar({
  size = 40,
  initials,
  color = "var(--ploomes-purple)",
  img,
  ring
}) {
  const style = {
    width: size,
    height: size,
    fontSize: Math.round(size * 0.36),
    background: img ? `center/cover no-repeat url(${img}), ${color}` : color,
    boxShadow: ring ? "0 0 0 2px #fff" : "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar-circle",
    style: style
  }, !img && initials);
}

/* ---------- Pill ---------- */
function Pill({
  children,
  tone = "neutral",
  icon
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `pill pill-${tone}`
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 11
  }) : null, children);
}

/* ---------- Button ---------- */
function Button({
  children,
  variant = "primary",
  size,
  icon,
  onClick,
  type = "button"
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""}`
  }, icon ? /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === "sm" ? 14 : 16
  }) : null, children);
}
Object.assign(window, {
  Icon,
  PloomesMark,
  Avatar,
  Pill,
  Button
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/pipeline-view.jsx
try { (() => {
/* global React, Avatar, Pill, Button */

const STAGES = [{
  id: "lead",
  name: "Oportunidades",
  dot: "var(--neutral-400)"
}, {
  id: "qual",
  name: "Apresentação",
  dot: "#3B82F6"
}, {
  id: "prop",
  name: "Proposta enviada",
  dot: "#F59E0B"
}, {
  id: "won",
  name: "Fechado",
  dot: "var(--success)"
}];
const SEED_DEALS = {
  lead: [{
    id: 1,
    title: "Dynamic Solutions",
    value: "R$ 10.000,00",
    age: "20d",
    tone: "neutral",
    status: "Oportunidade",
    owners: [{
      i: "M",
      c: "#0EA5E9"
    }]
  }, {
    id: 2,
    title: "Indústria 4.0 S.A.",
    value: "R$ 1.000,00",
    age: "12d",
    tone: "neutral",
    status: "Oportunidade",
    owners: [{
      i: "JM",
      c: "#F472B6"
    }]
  }, {
    id: 3,
    title: "IndustriAll",
    value: "R$ 50.000,00",
    age: "8d",
    tone: "neutral",
    status: "Oportunidade",
    owners: [{
      i: "AS",
      c: "#A78BFA"
    }]
  }],
  qual: [{
    id: 4,
    title: "EcoCrafters",
    value: "R$ 24.000,00",
    age: "15d",
    tone: "brand",
    status: "Em negociação",
    owners: [{
      i: "M",
      c: "#0EA5E9"
    }, {
      i: "JM",
      c: "#F472B6"
    }]
  }, {
    id: 5,
    title: "BrightForge",
    value: "R$ 18.000,00",
    age: "6d",
    tone: "brand",
    status: "Em negociação",
    owners: [{
      i: "AS",
      c: "#A78BFA"
    }]
  }],
  prop: [{
    id: 6,
    title: "Soluções Integradas Ind.",
    value: "R$ 20.000,00",
    age: "20d",
    tone: "warning",
    status: "Provável",
    owners: [{
      i: "M",
      c: "#0EA5E9"
    }, {
      i: "JM",
      c: "#F472B6"
    }, {
      i: "AS",
      c: "#A78BFA"
    }]
  }, {
    id: 7,
    title: "ACME XPTO",
    value: "R$ 20.000,00",
    age: "20d",
    tone: "warning",
    status: "Provável",
    owners: [{
      i: "M",
      c: "#0EA5E9"
    }]
  }],
  won: [{
    id: 8,
    title: "TechWorks",
    value: "R$ 80.000,00",
    age: "20d",
    tone: "success",
    status: "Aprovado",
    owners: [{
      i: "AS",
      c: "#A78BFA"
    }, {
      i: "JM",
      c: "#F472B6"
    }]
  }, {
    id: 9,
    title: "InnoWave Tech",
    value: "R$ 32.000,00",
    age: "30d",
    tone: "success",
    status: "Aprovado",
    owners: [{
      i: "M",
      c: "#0EA5E9"
    }]
  }]
};
function PipelineView({
  onOpenClient
}) {
  const [deals, setDeals] = React.useState(SEED_DEALS);
  function moveForward(stageId, dealId) {
    const stages = STAGES.map(s => s.id);
    const idx = stages.indexOf(stageId);
    if (idx >= stages.length - 1) return;
    const next = stages[idx + 1];
    setDeals(d => {
      const card = d[stageId].find(c => c.id === dealId);
      const nextTone = next === "won" ? "success" : next === "prop" ? "warning" : next === "qual" ? "brand" : "neutral";
      const nextStatus = next === "won" ? "Aprovado" : next === "prop" ? "Provável" : next === "qual" ? "Em negociação" : "Oportunidade";
      return {
        ...d,
        [stageId]: d[stageId].filter(c => c.id !== dealId),
        [next]: [{
          ...card,
          tone: nextTone,
          status: nextStatus,
          age: "0d"
        }, ...d[next]]
      };
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Pipeline de vendas"), /*#__PURE__*/React.createElement(Pill, {
    tone: "brand"
  }, "Q3 \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "search"
  }, "Pesquisar"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "sliders"
  }, "Filtrar")), /*#__PURE__*/React.createElement("div", {
    className: "pipeline"
  }, STAGES.map(stage => /*#__PURE__*/React.createElement("div", {
    className: "column",
    key: stage.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "column-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: stage.dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, stage.name), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, deals[stage.id].length)), /*#__PURE__*/React.createElement("div", {
    className: "column-cards"
  }, deals[stage.id].map(deal => /*#__PURE__*/React.createElement("div", {
    className: "kcard",
    key: deal.id,
    onClick: () => onOpenClient(deal.title)
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, deal.title), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, deal.owners.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "avatar-circle",
    style: {
      width: 22,
      height: 22,
      fontSize: 9,
      background: o.c,
      border: "2px solid #fff",
      marginLeft: i ? -7 : 0
    }
  }, o.i))), /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, deal.value), /*#__PURE__*/React.createElement(Pill, {
    tone: deal.tone
  }, deal.status), /*#__PURE__*/React.createElement("span", {
    className: "age"
  }, deal.age)), stage.id !== "won" && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: "3px 8px"
    },
    onClick: e => {
      e.stopPropagation();
      moveForward(stage.id, deal.id);
    }
  }, "Avan\xE7ar \u2192")))), /*#__PURE__*/React.createElement("button", {
    className: "kcard",
    style: {
      border: "1px dashed var(--border-strong)",
      background: "transparent",
      color: "var(--fg-3)",
      cursor: "pointer",
      textAlign: "left",
      padding: "10px 14px",
      fontFamily: "inherit",
      fontSize: 13
    }
  }, "+ Novo card"))))));
}
window.PipelineView = PipelineView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/pipeline-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/shell.jsx
try { (() => {
/* global React, Avatar, Pill, Button, Icon */

const SIDEBAR_ITEMS = [{
  id: "pipeline",
  icon: "filter",
  label: "Pipeline"
}, {
  id: "client",
  icon: "contact",
  label: "Cliente"
}, {
  id: "config",
  icon: "sliders",
  label: "Configurações"
}, {
  id: "docs",
  icon: "doc",
  label: "Documentos"
}, {
  id: "cloud",
  icon: "cloud",
  label: "Nuvem"
}];
function Sidebar({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement(window.PloomesMark, {
    size: 28,
    color: "#fff"
  })), SIDEBAR_ITEMS.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `nav-btn ${active === it.id ? "active" : ""}`,
    title: it.label,
    onClick: () => onChange(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "nav-btn",
    title: "Configura\xE7\xF5es da conta"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gear",
    size: 22
  })));
}
function Topbar({
  crumb,
  onNew
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    onClick: onNew
  }, "Novo"), /*#__PURE__*/React.createElement("div", {
    className: "crumb",
    style: {
      marginLeft: 8
    }
  }, crumb.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      margin: "0 8px",
      opacity: .5
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: i === crumb.length - 1 ? 700 : 600,
      color: i === crumb.length - 1 ? "var(--ploomes-ink)" : "inherit"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: "Calend\xE1rio"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cal",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    title: "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "6")), /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: {
      backgroundImage: "linear-gradient(135deg,#843CFF,#1E0C45)"
    }
  }));
}
window.Sidebar = Sidebar;
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AvatarBrand = __ds_scope.AvatarBrand;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ButtonBrand = __ds_scope.ButtonBrand;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ClientLogo = __ds_scope.ClientLogo;

__ds_ns.ClientLogos = __ds_scope.ClientLogos;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MENU_MODULES = __ds_scope.MENU_MODULES;

__ds_ns.MenuModule = __ds_scope.MenuModule;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
