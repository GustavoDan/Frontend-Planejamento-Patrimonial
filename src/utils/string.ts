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

export const formatSignedNumber = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
        signDisplay: "always",
    }).format(value);

export const splitCurrency = (value: string) => {
    const match = value
        .trim()
        .replace(/\u00A0/g, " ")
        .match(/^(R\$ )(\d{1,3}(?:\.\d{3})*|\d+)(,\d{2})$/);
    if (!match) {
        throw new Error(value);
    }
    return { currency: match[1], value: match[2], cents: match[3] };
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
