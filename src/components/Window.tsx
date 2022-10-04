import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import React, { useCallback, useState } from 'react'

export interface WindowProps extends React.ComponentProps<'div'> {
  title?: string
}

export default function Window({ title, className, children }: WindowProps) {
  const [state, setState] = useState<string>('open')

  const onMinimize = useCallback(
    () => setState(state === 'open' ? 'closed' : 'open'),
    [state, setState]
  )
  const onMaximize = useCallback(() => setState('full'), [setState])
  const onClose = useCallback(() => setState('closed'), [setState])

  return (
    <div
      className={
        state === 'full'
          ? 'fixed inset-0 z-[200] h-screen w-screen'
          : 'relative h-full w-full'
      }
      {...(state === 'full' && { 'aria-modal': true, role: 'dialog' })}
    >
      {state === 'full' && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-primary-900/80"
          aria-hidden="true"
          onClick={onMinimize}
        />
      )}
      <div
        className={`overflow-hidden rounded-xl bg-primary-800 shadow-xl dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur ${
          state === 'closed'
            ? 'relative max-h-[31px] dark:bg-primary-900/70'
            : ''
        } ${
          state === 'full'
            ? 'fixed inset-x-4 inset-y-[5vh] max-h-[90vh] dark:bg-primary-900 sm:inset-x-6 md:inset-x-8'
            : ''
        } ${
          state === 'open' ? 'relative max-h-full dark:bg-primary-900/70' : ''
        } ${className}`}
      >
        <div className="-mb-px flex h-8 w-full items-center justify-between border-b border-primary-500 px-4 text-primary-400 dark:border-primary-500/30 dark:text-primary-500">
          <span className="truncate font-semibold text-primary-400">
            {title}
          </span>
          <div className="flex items-center justify-end gap-x-2">
            <button
              className="h-4 w-4"
              onClick={onMinimize}
              aria-label="Minimize Window"
            >
              <MinusCircleIcon />
            </button>
            <button
              className="h-4 w-4"
              onClick={onMaximize}
              aria-label="Maximize Window"
            >
              <PlusCircleIcon />
            </button>
            <button
              className="h-4 w-4"
              onClick={onClose}
              aria-label="Close Window"
            >
              <XCircleIcon />
            </button>
          </div>
        </div>
        <div className="h-[calc(100%-31px)] w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
