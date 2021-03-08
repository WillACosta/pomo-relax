### Pomo-Relax APP

- Estrutura inicial do projeto
  - Adição do SASS

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
  ul: 1921px,
);

@media (max-width: map-get($map: $grid-breakpoints, $key: 'sm')) {
  margin-left: 1rem;
}
