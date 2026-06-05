"use client";

import { useEffect } from "react";

export const useReveal = () => {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const handleToggle = () => links?.classList.toggle("open");
    toggle?.addEventListener("click", handleToggle);
    links?.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });

    const revealEls = [...document.querySelectorAll<HTMLElement>(".reveal")];
    const showEl = (el: HTMLElement) => el.classList.add("in");
    revealEls.forEach((el) => {
      const sibs = [...el.parentElement!.children].filter((c) =>
        c.classList.contains("reveal"),
      );
      el.style.transitionDelay = `${sibs.indexOf(el) * 0.1}s`;
    });

    const heroTitle = document.querySelector<HTMLElement>(".hero-title");
    if (heroTitle) {
      heroTitle.querySelectorAll<HTMLElement>(".word").forEach((w, i) => {
        w.style.transitionDelay = `${0.15 + i * 0.12}s`;
      });
      requestAnimationFrame(() =>
        requestAnimationFrame(() => heroTitle.classList.add("in")),
      );
    }

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              showEl(e.target as HTMLElement);
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => io!.observe(el));
    }

    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) showEl(el);
      });
    };
    revealInView();
    const fallbackTimer = window.setTimeout(
      () => revealEls.forEach(showEl),
      1400,
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      toggle?.removeEventListener("click", handleToggle);
      io?.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);
};
