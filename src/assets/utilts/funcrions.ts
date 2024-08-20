/**
 *
 * @param {string} txt - النص الذي يجب قصّه.
 * @param {number} [max=40] - الحد الأقصى للطول، الافتراضي هو 40.
 * @returns {string} - النص المقتطع.
 */
export function txtSlice(txt: string, max = 40) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
