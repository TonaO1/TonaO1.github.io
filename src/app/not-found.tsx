import { Screen, BackButton } from "@/components/Screen";

export default function NotFound() {
  return (
    <Screen title="Quest Not Found" actions={<BackButton href="/" label="Return to Menu" />}>
      <div className="pixel-panel mx-auto mt-10 max-w-md p-8 text-center">
        <p className="font-pixel text-5xl text-accent">404</p>
        <p className="mt-3 text-muted">
          This page wandered off the map. It may have moved, or the address is wrong.
        </p>
      </div>
    </Screen>
  );
}
