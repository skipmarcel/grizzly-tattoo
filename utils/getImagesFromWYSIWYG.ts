export default ({ html = "" }: { html: string }) => {
  const normalizedHTML = html.replace(/\n/g, "").trim();

  const imageSrcRegex = /<img[^>]+src="([^">]+)"/g;
  const sources: string[] = [];
  let match;

  while ((match = imageSrcRegex.exec(normalizedHTML)) !== null) {
    const cleanedUrl = match[1].replace(/-\d+x\d+(?=\.\w+$)/, "");
    sources.push(cleanedUrl);
  }

  return sources;
};
