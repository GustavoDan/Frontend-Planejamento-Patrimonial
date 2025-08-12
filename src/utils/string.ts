type CapitalizeFn = {
    <T extends string>(str: T): Capitalize<T>;
    (str: string): string;
};

// The 'as' assertion is required to satisfy the function overload type.
// This is a known limitation when implementing overloads with arrow functions.
export const capitalize = ((string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}) as CapitalizeFn;

export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
};

export const getInitials = (userName: string) => {
    const nameParts = userName
        .trim()
        .split(/[._-\s]/)
        .filter(Boolean);

    if (nameParts.length === 0) {
        return "??";
    }
    if (nameParts.length > 1) {
        const firstInitial = nameParts[0][0] ?? "";
        const lastInitial = nameParts[nameParts.length - 1][0] ?? "";
        return (firstInitial + lastInitial).toUpperCase();
    }

    return nameParts[0].substring(0, 2).toUpperCase();
};
