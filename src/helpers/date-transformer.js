export const transformDate = ({ date, locale = "fr-FR" }) => {
    const _date = new Date(date);

    return _date.toLocaleDateString(locale, {
        year: "numeric",
        month: "numeric",
    });
};
