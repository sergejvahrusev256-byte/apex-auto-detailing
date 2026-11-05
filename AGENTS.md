<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content (nav links, services, contacts, gallery) lives in `src/lib/site-data.ts`; sections in `src/components/site/` are reused by both the home page and the dedicated routes, so edit content in one place.
- Contact form validation lives in `src/lib/contact-schema.ts` (zod) with tests beside it; the form has no backend yet and only shows a success state.
