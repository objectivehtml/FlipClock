function stopAfterChanges<P extends CallbackParams<any[]>, R>(totalChanges: number, fn: Callback<P, R>): Callback<P, R>;