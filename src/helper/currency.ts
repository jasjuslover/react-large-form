export const formatIntl = ({
  num = 0,
  fraction = 9,
  showSign = false,
}): string => {
  let value = Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: fraction,
  }).format(num);

  if (!showSign) {
    value = value.replace("Rp", "").trim();
  }

  return value;
};
