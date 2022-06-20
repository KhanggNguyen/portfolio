export const transformDate = ({ date }) => {
    const _date = new Date(date);

    return _date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
    });
};
