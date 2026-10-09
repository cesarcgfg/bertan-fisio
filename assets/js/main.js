/* Bertan Fisio · menú móvil y validación del formulario de reserva */

(() => {
  /* Menú móvil
     ------------------------------------------------------------------------ */
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
    const setOpen = (open) => toggle.setAttribute('aria-expanded', String(open));

    toggle.hidden = false;
    setOpen(false);

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 50rem)').addEventListener('change', () => setOpen(false));
  }

  /* Formulario de reserva
     Reglas del README; los mensajes están en data-error-message de cada campo.
     ------------------------------------------------------------------------ */
  const form = document.querySelector('[data-booking-form]');
  const confirmation = document.querySelector('[data-confirmation]');

  if (!form || !confirmation) return;

  const rules = {
    nombre: (field) => field.value.trim() !== '',
    telefono: (field) => field.value.replace(/\D/g, '').length >= 9,
    correo: (field) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()),
    motivo: (field) => field.value !== '',
    privacidad: (field) => field.checked,
  };

  const errorFor = (field) => form.querySelector(`[data-error-for="${field.name}"]`);

  const showError = (field) => {
    const error = errorFor(field);
    error.textContent = field.dataset.errorMessage;
    error.hidden = false;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', error.id);
  };

  const clearError = (field) => {
    const error = errorFor(field);
    error.textContent = '';
    error.hidden = true;
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  };

  form.noValidate = true;

  const clearOnEdit = (event) => {
    if (event.target.getAttribute('aria-invalid') === 'true') clearError(event.target);
  };

  form.addEventListener('input', clearOnEdit);
  form.addEventListener('change', clearOnEdit);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let firstInvalid = null;

    Object.entries(rules).forEach(([name, isValid]) => {
      const field = form.elements[name];

      if (isValid(field)) {
        clearError(field);
      } else {
        showError(field);
        firstInvalid ??= field;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    form.hidden = true;
    confirmation.hidden = false;
    confirmation.querySelector('[data-confirmation-title]').focus();
  });
})();
