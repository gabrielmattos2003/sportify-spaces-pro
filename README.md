# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a5b8730d-65d2-4ff8-9ffc-a3df7266541e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a5b8730d-65d2-4ff8-9ffc-a3df7266541e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (Auth, Database, Storage)

## Backend (Supabase) Setup

This project uses Supabase for authentication (email/password), database, and storage. No separate server is required.

1) Create a Storage bucket
- In Supabase > Storage, create a public bucket named `logos`.

2) Database table and RLS policies
- In Supabase > SQL, run:
```
create extension if not exists pgcrypto;
create table if not exists public.logos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  path text not null,
  created_at timestamp with time zone default now()
);
alter table public.logos enable row level security;
create policy "Users can manage their own logos" on public.logos
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

3) Configure Supabase client keys
- Open `src/lib/supabaseClient.ts` and replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` with your project values.
- Note: Lovable does not use .env for frontend. Public anon key is safe in the browser.

4) Available services/hooks
- Auth: `src/services/authService.ts`, `src/hooks/useAuth.ts`
- Storage: `src/services/storageService.ts`
- Logos DB: `src/services/logoService.ts`
- React Query cache + lazy requests: `src/hooks/useLogos.ts`

5) Usage example
```ts
// Upload a processed logo (Blob)
import { useAuth } from '@/hooks/useAuth';
import { useLogos } from '@/hooks/useLogos';

const { user } = useAuth();
const { logosQuery, uploadMutation } = useLogos(user?.id);

// To upload
// uploadMutation.mutate({ blob, fileName: 'logo.png', contentType: 'image/png' });

// To list
// const logos = logosQuery.data;
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a5b8730d-65d2-4ff8-9ffc-a3df7266541e) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
