from pathlib import Path
import time
import urllib.request

ROOT = Path(__file__).resolve().parent
INPUT = ROOT / "filters.txt"
OUTPUT = ROOT / "polish-complete-filters.txt"


def load_urls() -> list[str]:
    return [
        line.strip()
        for line in INPUT.read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.strip().startswith("#")
    ]


def fetch_text(url: str) -> str:
    with urllib.request.urlopen(url, timeout=120) as response:
        return response.read().decode("utf-8", errors="replace")


def main() -> None:
    urls = load_urls()
    seen_rules: set[str] = set()
    output_lines: list[str] = [
        "! Title: Polish Complete Filters",
        "! Description: Combined filter list generated from upstream sources for uBlock Origin",
        f"! Last modified: {time.strftime('%d %b %Y %H:%M UTC', time.gmtime())}",
        "! Expires: 1 days",
        "! Homepage: https://github.com/rokartur/polish-complete-filters",
        f"! Source count: {len(urls)}",
        "!",
    ]

    for index, url in enumerate(urls, start=1):
        print(f"[{index}/{len(urls)}] Fetching {url}")
        output_lines.append(f"! ===== BEGIN SOURCE: {url}")

        try:
            raw = fetch_text(url)
        except Exception as exc:  # noqa: BLE001
            output_lines.append(f"! Failed to fetch: {url}")
            output_lines.append(f"! Error: {exc}")
            output_lines.append(f"! ===== END SOURCE: {url}")
            output_lines.append("")
            continue

        for line in raw.splitlines():
            normalized = line.rstrip("\n")

            if not normalized:
                output_lines.append("")
                continue

            if normalized.startswith("!"):
                output_lines.append(normalized)
                continue

            if normalized in seen_rules:
                continue

            seen_rules.add(normalized)
            output_lines.append(normalized)

        output_lines.append(f"! ===== END SOURCE: {url}")
        output_lines.append("")

    OUTPUT.write_text("\n".join(output_lines) + "\n", encoding="utf-8")
    print(f"Wrote: {OUTPUT}")
    print(f"Unique rules: {len(seen_rules)}")


if __name__ == "__main__":
    main()
