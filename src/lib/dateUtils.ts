import { differenceInMonths, formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";

type UpdateStatus = {
  text: string;
  color: "success" | "warning" | "danger";
};

export function getUpdateStatus(
  updatedAt: string | undefined
): UpdateStatus | null {
  if (!updatedAt) {
    return null;
  }

  const updatedAtDate = new Date(updatedAt);
  const now = new Date();
  const monthsDiff = differenceInMonths(now, updatedAtDate);

  const text = formatDistanceToNowStrict(updatedAtDate, {
    addSuffix: true,
    locale: ptBR,
  });

  if (monthsDiff >= 6) {
    return { text, color: "danger" };
  }
  if (monthsDiff >= 3) {
    return { text, color: "warning" };
  }
  return { text, color: "success" };
}
