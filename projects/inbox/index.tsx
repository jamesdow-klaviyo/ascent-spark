import "./tailwind.css";
import "./index.scss";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Star, Archive, Trash2 } from "lucide-react";

export const title = "Inbox Zero";
export const description =
  "A sleek email inbox simulation — star, archive, or delete with smooth animations and progress toward inbox zero.";

export type Email = {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  date: string;
  starred: boolean;
};

const MOCK_EMAILS: Email[] = [
  { id: "1", from: "Team Ascent", subject: "Weekly design sync — agenda", snippet: "Hi! Here’s the agenda for Thursday’s sync. We’ll cover the new component library and…", date: "10:42 AM", starred: false },
  { id: "2", from: "Notion", subject: "Your doc \"Q1 Goals\" was updated", snippet: "Sarah mentioned you in a comment. Open the doc to see what changed.", date: "9:18 AM", starred: true },
  { id: "3", from: "Stripe", subject: "Receipt for your payment", snippet: "You paid Acme Inc. $29.00. Receipt and invoice are attached.", date: "Yesterday", starred: false },
  { id: "4", from: "Linear", subject: "Issue ENG-421 moved to In Progress", snippet: "You were assigned to this issue. Due: Feb 20.", date: "Yesterday", starred: false },
  { id: "5", from: "Figma", subject: "You have 3 new comments", snippet: "Comments from the team on the checkout flow frames.", date: "Mon", starred: true },
  { id: "6", from: "GitHub", subject: "Pull request #142 merged", snippet: "Your PR into main was merged. Great work on the refactor.", date: "Mon", starred: false },
  { id: "7", from: "Calendar", subject: "Reminder: Interview at 2:00 PM", snippet: "Design interview with candidate — Product role. Meet in Room 4.", date: "Sun", starred: false },
  { id: "8", from: "Slack", subject: "Summary of your unread threads", snippet: "You have 4 unread threads in #design and #product.", date: "Sat", starred: false },
  { id: "9", from: "Newsletter", subject: "Design systems weekly #89", snippet: "This week: accessibility in design tokens, new Figma plugins, and more.", date: "Fri", starred: true },
  { id: "10", from: "Support", subject: "Your ticket #8821 was resolved", snippet: "We’ve marked your request as resolved. Reply to reopen.", date: "Fri", starred: false },
  { id: "11", from: "HR", subject: "Benefits open enrollment ends soon", snippet: "Reminder: open enrollment closes next Friday. Review your selections in the portal.", date: "Thu", starred: false },
  { id: "12", from: "Alex Chen", subject: "Quick question about the prototype", snippet: "Hey! Can we jump on a 15-min call to walk through the interaction on the modal?", date: "Thu", starred: false },
  { id: "13", from: "Vercel", subject: "Deployment ready: ascent-spark", snippet: "Your deployment to production completed successfully.", date: "Wed", starred: false },
  { id: "14", from: "Loom", subject: "New video shared with you", snippet: "Jordan shared a Loom about the onboarding flow. Watch it here.", date: "Wed", starred: false },
  { id: "15", from: "Spotify", subject: "Your Discover Weekly is ready", snippet: "We picked 30 new songs we think you’ll love. Listen now.", date: "Tue", starred: false },
];

const INITIAL_COUNT = MOCK_EMAILS.length;

function useExitAnimation(remove: (id: string) => void, delayMs = 320) {
  const [exiting, setExiting] = useState<Set<string>>(new Set());

  const startExit = useCallback(
    (id: string) => {
      setExiting((prev) => new Set(prev).add(id));
      const t = setTimeout(() => {
        remove(id);
        setExiting((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }, delayMs);
      return () => clearTimeout(t);
    },
    [remove, delayMs]
  );

  return { exiting, startExit };
}

export default function Inbox() {
  const [emails, setEmails] = useState<Email[]>(() => [...MOCK_EMAILS]);

  const removeFromInbox = useCallback((id: string) => {
    setEmails((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const { exiting, startExit } = useExitAnimation(removeFromInbox);

  const archive = (id: string) => startExit(id);
  const deleteEmail = (id: string) => startExit(id);

  const toggleStar = (id: string) => {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, starred: !e.starred } : e))
    );
  };

  const cleared = INITIAL_COUNT - emails.length;
  const progressPercent = Math.round((cleared / INITIAL_COUNT) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
        <nav className="mb-6 flex items-center border-b border-border pb-4">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All projects
          </Link>
        </nav>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Inbox
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Star, archive, or delete — and watch your progress to inbox zero.
          </p>

          <div className="mt-4 rounded-xl bg-card border border-border p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="font-medium text-foreground">Inbox zero</span>
              <span className="text-muted-foreground">
                {cleared} of {INITIAL_COUNT} cleared
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="progress-bar-fill h-full rounded-full bg-primary"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        <ul className="space-y-1">
          {emails.map((email) => (
            <li
              key={email.id}
              className={`email-row rounded-lg border border-border bg-card px-4 py-3 shadow-sm ${exiting.has(email.id) ? "exiting" : ""}`}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggleStar(email.id)}
                  className={`star-btn mt-0.5 shrink-0 rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground ${email.starred ? "starred" : ""}`}
                  aria-label={email.starred ? "Unstar" : "Star"}
                >
                  <Star
                    size={18}
                    strokeWidth={1.5}
                    fill={email.starred ? "currentColor" : "none"}
                  />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="truncate font-medium text-foreground">
                      {email.from}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {email.date}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {email.subject}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
                    {email.snippet}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={() => archive(email.id)}
                    className="rounded p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    aria-label="Archive"
                  >
                    <Archive size={18} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteEmail(email.id)}
                    className="rounded p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Delete"
                  >
                    <Trash2 size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {emails.length === 0 && (
          <div className="mt-8 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <p className="text-lg font-medium text-foreground">Inbox zero!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              You’ve cleared everything. Nice work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export const routes = [{ path: "/", Component: () => null }];
