import type { CvData } from "./cv.types";

type CvModule = {
  cvData: CvData;
};

const modules = import.meta.glob<CvModule>("./profiles/*.data.ts", {
  eager: true,
});

export function getCvData(name: string): CvData {
  const path = `./profiles/${name}.data.ts`;
  const module = modules[path];

  if (!module) {
    const available = getAvailableCvs();

    throw new Error(
      `CV "${name}" not found. Available CVs: ${available.join(", ")}`,
    );
  }

  return module.cvData;
}

export function getAvailableCvs(): string[] {
  return Object.keys(modules).map((path) =>
    path.replace("./profiles/", "").replace(".data.ts", ""),
  );
}
