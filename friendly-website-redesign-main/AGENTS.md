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

- Keep shared site navigation and footer in the root layout and reusable site components so every public page has a consistent browsing experience.
- Keep editable service and article content in a browser-safe content module; leaf routes own their metadata and render independent shareable pages.
- Keep the current website presentation-only; contact uses the supplied telephone number rather than pretending to submit messages or providing unconnected login controls.
