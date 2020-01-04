module.exports = () => {
  const isEmpy = (value, msg) => {
    if (!value) throw msg;
    if (Array.isArray(value) && value.length === 0) throw msg;
    if (typeof value === "string" && !value.trim()) throw msg;
  };

  const isNotEmpy = (value, msg) => {
    try {
      isEmpy(value, msg);
    } catch (msg) {
      return;
    }
    throw msg;
  };

  const isEquals = (valueA, valueB, msg) => {
    if (valueA !== valueB) throw msg;
  };

  return {
    isEmpy,
    isNotEmpy,
    isEquals
  };
};
