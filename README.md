# Supabase Next.js Application

A modern, type-safe Next.js application with Supabase integration.

## Project Structure

```
.
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── profiles/           # Profile-related components
│   │   └── profiles-table.tsx
│   └── ui/                 # Reusable UI components
│       ├── error-message.tsx
│       └── table.tsx
├── lib/                    # Utility libraries
│   ├── api/               # API layer
│   │   └── profiles.ts   # Profile data fetching
│   ├── config.ts         # Environment configuration
│   ├── constants.ts      # Application constants
│   └── utils.ts         # Utility functions
├── types/                 # TypeScript type definitions
│   └── database.ts       # Database types
├── utils/supabase/       # Supabase client utilities
│   ├── client.ts        # Browser client
│   └── server.ts        # Server client
└── supabase/            # Supabase configuration
    └── migrations/      # Database migrations

```

## Architecture Decisions

### Type Safety
- TypeScript types for database schema (`types/database.ts`)
- Generic types for Supabase clients
- Strongly typed API responses

### Separation of Concerns
- **API Layer** (`lib/api/`): Data fetching logic separated from UI
- **Components** (`components/`): Reusable, presentational components
- **Utils** (`utils/`): Client initialization and shared utilities

### Error Handling
- Centralized error handling in API layer
- User-friendly error display components
- Proper error logging

### Configuration
- Environment variable validation (`lib/config.ts`)
- Type-safe configuration access
- Clear error messages for missing env vars

### Code Organization
- Feature-based component organization
- Shared UI components in `components/ui/`
- Constants and configuration separated from logic

## Getting Started

1. Install dependencies:
```bash
npm install
# or
bun install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Run the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Features

- ✅ Type-safe Supabase integration
- ✅ Server-side rendering with Next.js 14+
- ✅ Reusable component library
- ✅ Error boundary and handling
- ✅ Environment validation
- ✅ Clean architecture with separation of concerns
- ✅ Pagination support
- ✅ Responsive design with Tailwind CSS

## Development Guidelines

### Adding a New Feature

1. **Define types** in `types/` if needed
2. **Create API functions** in `lib/api/`
3. **Build UI components** in `components/`
4. **Use components** in `app/` pages

### Best Practices

- Always use the centralized config for environment variables
- Extract reusable logic into utility functions
- Keep components small and focused
- Use TypeScript for type safety
- Handle errors gracefully
- Write descriptive comments for complex logic

## License

MIT
